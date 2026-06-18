/**
 * Aparthotel Siete32 — Content API (Cloudflare Pages Function)
 *
 * Stores ONE JSON document in Workers KV that controls the editable
 * home-page content: card order, the announcement banner, and promos.
 *
 *   GET  /api/content   → returns the JSON          (public, read-only)
 *   PUT  /api/content   → saves the JSON            (requires password)
 *   POST /api/content   → checks the password only  (used by the admin login)
 *
 * Configure in the Cloudflare Pages dashboard (Settings → Functions):
 *   - KV namespace binding   named  CONTENT
 *   - Environment variable    named  ADMIN_PASSWORD  (mark it as a secret)
 *
 * If KV or the password is not configured yet, GET still returns the
 * built-in defaults so the public site keeps working no matter what.
 */

// Bumped from "site-content" so any cards saved under the old 3-type
// structure are ignored; GET then falls back to the new 5-type defaults.
const KV_KEY = "site-content-v2";

// Shipped defaults — these mirror the current hardcoded home page, so the
// very first visit (before anyone edits anything) looks identical to today.
const DEFAULT_CONTENT = {
  banner: {
    enabled: false,
    text: "",
    color: "#5D94A1",
    textColor: "#FFFFFF",
    link: ""
  },
  cards: [
    { id: "executive",      order: 1, visible: true, title: "Executive",        priceFrom: 1000, image: "exec-21-22-2.jpg" },
    { id: "executive-jr",   order: 2, visible: true, title: "Executive Jr.",    priceFrom: 950,  image: "execjr-17-1.jpg" },
    { id: "junior-suite",   order: 3, visible: true, title: "Junior Studio",     priceFrom: 1150, image: "jr-11-14-3.jpg" },
    { id: "master-suite",   order: 4, visible: true, title: "Master Studio",     priceFrom: 1300, image: "master-18-1.jpg" },
    { id: "master-suite-jr", order: 5, visible: true, title: "Master Studio Jr.", priceFrom: 1300, image: "masterjr-10-1.jpg" }
  ],
  promos: []
};

/* ------------------------------- routes -------------------------------- */

export async function onRequestGet({ env }) {
  if (!env.CONTENT) return json(DEFAULT_CONTENT);
  const stored = await env.CONTENT.get(KV_KEY);
  if (!stored) return json(DEFAULT_CONTENT);
  try {
    return json(JSON.parse(stored));
  } catch {
    return json(DEFAULT_CONTENT);
  }
}

// Login check only — verifies the password without writing anything.
export async function onRequestPost({ request, env }) {
  const auth = checkAuth(request, env);
  if (auth !== true) return auth;
  return json({ ok: true });
}

// Save the new content (password required).
export async function onRequestPut({ request, env }) {
  const auth = checkAuth(request, env);
  if (auth !== true) return auth;

  if (!env.CONTENT) {
    return json({ error: "El almacenamiento (KV 'CONTENT') no está configurado." }, 500);
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "JSON inválido." }, 400);
  }

  const clean = sanitize(body);
  await env.CONTENT.put(KV_KEY, JSON.stringify(clean));
  return json({ ok: true, content: clean });
}

/* --------------------------------- auth -------------------------------- */

// Returns `true` when the password is valid, otherwise a Response to send back.
function checkAuth(request, env) {
  const expected = env.ADMIN_PASSWORD;
  if (!expected) {
    return json({ error: "Falta configurar ADMIN_PASSWORD en el servidor." }, 500);
  }
  const provided = readPassword(request);
  if (!provided || !timingSafeEqual(provided, expected)) {
    return json({ error: "Contraseña incorrecta." }, 401);
  }
  return true;
}

function readPassword(request) {
  const auth = request.headers.get("Authorization") || "";
  if (auth.startsWith("Bearer ")) return auth.slice(7).trim();
  return (request.headers.get("X-Admin-Password") || "").trim();
}

// Length-independent comparison to avoid leaking the password via timing.
function timingSafeEqual(a, b) {
  if (typeof a !== "string" || typeof b !== "string") return false;
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

/* ------------------------------ validation ----------------------------- */

// Keep only the fields we expect, with safe types and sensible fallbacks.
// This guarantees a malformed payload can never write something that
// breaks the public site.
function sanitize(body) {
  const out = JSON.parse(JSON.stringify(DEFAULT_CONTENT));
  if (!body || typeof body !== "object") return out;

  if (body.banner && typeof body.banner === "object") {
    out.banner = {
      enabled: !!body.banner.enabled,
      text: String(body.banner.text || "").slice(0, 200),
      color: cssColor(body.banner.color, "#5D94A1"),
      textColor: cssColor(body.banner.textColor, "#FFFFFF"),
      link: String(body.banner.link || "").slice(0, 300)
    };
  }

  if (Array.isArray(body.cards)) {
    const defaults = Object.fromEntries(DEFAULT_CONTENT.cards.map(c => [c.id, c]));
    const result = [];
    const used = new Set();
    for (const c of body.cards) {
      if (!c || typeof c !== "object") continue;
      const id = String(c.id || "");
      if (!defaults[id] || used.has(id)) continue;
      used.add(id);
      const d = defaults[id];
      result.push({
        id,
        order: result.length + 1,
        visible: c.visible === undefined ? true : !!c.visible,
        title: String(c.title || d.title).slice(0, 80),
        priceFrom: Number.isFinite(+c.priceFrom) ? Math.max(0, Math.round(+c.priceFrom)) : d.priceFrom,
        image: cssImage(c.image, d.image)
      });
    }
    // Re-append any known card the payload left out, so we never lose one.
    for (const d of DEFAULT_CONTENT.cards) {
      if (!used.has(d.id)) result.push({ ...d, order: result.length + 1 });
    }
    out.cards = result;
  }

  if (Array.isArray(body.promos)) {
    const scopes = ["all", "executive", "executive-jr", "junior-suite", "master-suite", "master-suite-jr"];
    out.promos = body.promos
      .slice(0, 20)
      .map((p, i) => ({
        id: String((p && p.id) || ("p" + (i + 1))).slice(0, 40),
        active: !!(p && p.active),
        scope: p && scopes.includes(p.scope) ? p.scope : "all",
        badge: String((p && p.badge) || "").slice(0, 24),
        note: String((p && p.note) || "").slice(0, 160)
      }))
      .filter(p => p.badge || p.note);
  }

  return out;
}

function cssColor(val, fallback) {
  const s = String(val || "").trim();
  return /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(s) ? s : fallback;
}

// Only allow a bare image filename (lives under /assets/images/).
function cssImage(val, fallback) {
  const s = String(val || "").trim();
  return /^[\w-]+\.(jpg|jpeg|png|webp|gif)$/i.test(s) ? s : fallback;
}

/* ------------------------------- helpers ------------------------------- */

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store"
    }
  });
}
