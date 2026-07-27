/* =============================================
   APARTHOTEL SIETE32 — Dynamic content loader
   ---------------------------------------------
   Applies the admin-managed content (banner, home-card order/details,
   promos) on top of the existing page.

   PROGRESSIVE ENHANCEMENT: if the API is unreachable or returns bad
   data, we do nothing and the hardcoded HTML stays exactly as-is — the
   site can never break because of this script.
   ============================================= */
(function () {
  "use strict";

  var API = "/api/content";

  document.addEventListener("DOMContentLoaded", function () {
    fetch(API, { headers: { Accept: "application/json" } })
      .then(function (r) { return r.ok ? r.json() : Promise.reject(r.status); })
      .then(applyContent)
      .catch(function () { /* keep the hardcoded defaults */ });
  });

  function applyContent(data) {
    if (!data || typeof data !== "object") return;
    if (data.banner) renderBanner(data.banner);
    if (Array.isArray(data.cards)) applyCards(data.cards, data.promos || []);
  }

  /* ------------------------------ banner ------------------------------ */

  function renderBanner(banner) {
    var existing = document.getElementById("site-banner");

    if (!banner.enabled || !banner.text) {
      if (existing) existing.remove();
      document.body.classList.remove("has-banner");
      setBannerHeight(0);
      return;
    }

    var el = existing;
    if (!el) {
      el = document.createElement("div");
      el.id = "site-banner";
      el.className = "site-banner";
      document.body.insertBefore(el, document.body.firstChild);
    }
    el.style.background = banner.color || "#5D94A1";
    el.style.color = banner.textColor || "#FFFFFF";
    el.innerHTML = "";

    if (banner.link) {
      var a = document.createElement("a");
      a.href = banner.link;
      a.textContent = banner.text;
      el.appendChild(a);
    } else {
      el.appendChild(document.createTextNode(banner.text));
    }

    document.body.classList.add("has-banner");
    // Expose the banner's height so the fixed header / hero can offset for it.
    requestAnimationFrame(function () { setBannerHeight(el.offsetHeight); });
    window.addEventListener("resize", debounce(function () {
      setBannerHeight(el.offsetHeight);
    }, 150));
  }

  function setBannerHeight(px) {
    document.documentElement.style.setProperty("--banner-h", px + "px");
  }

  /* ------------------------------- cards ------------------------------ */

  function applyCards(cards, promos) {
    var sorted = cards.slice().sort(function (a, b) {
      return (a.order || 0) - (b.order || 0);
    });

    sorted.forEach(function (card) {
      var el = document.querySelector('.suite-card[data-card-id="' + card.id + '"]');
      if (!el) return;

      // Show / hide
      el.style.display = card.visible === false ? "none" : "";

      // Re-order: moving each card to the end of its parent in sorted
      // sequence leaves the section heading first and the cards in order.
      if (el.parentNode) el.parentNode.appendChild(el);

      // Title
      if (card.title) {
        var h3 = el.querySelector(".suite-info h3");
        if (h3) h3.textContent = card.title;
      }

      // "Desde" price — keep the same markup ("$1,300 <span>MXN / noche</span>")
      if (card.priceFrom != null) {
        var priceEl = el.querySelector(".suite-pricing .price");
        if (priceEl) {
          var perNight = (document.documentElement.lang || "es").toLowerCase().indexOf("en") === 0
            ? "MXN / night" : "MXN / noche";
          priceEl.innerHTML = "$" + Number(card.priceFrom).toLocaleString("en-US") +
            ' <span>' + perNight + '</span>';
        }
      }

      // Image
      if (card.image) {
        var img = el.querySelector(".suite-image img");
        if (img) img.src = "assets/images/" + card.image;
      }

      applyPromo(el, card.id, promos);
    });
  }

  /* ------------------------------ promos ------------------------------ */

  function applyPromo(cardEl, cardId, promos) {
    // Clear any previously applied promo elements first.
    var imageWrap = cardEl.querySelector(".suite-image");
    if (imageWrap) {
      var oldBadge = imageWrap.querySelector(".promo-badge");
      if (oldBadge) oldBadge.remove();
    }
    var oldNote = cardEl.querySelector(".promo-note");
    if (oldNote) oldNote.remove();

    var match = (promos || []).filter(function (p) {
      return p.active && (p.scope === "all" || p.scope === cardId);
    })[0];
    if (!match) return;

    if (match.badge && imageWrap) {
      var badge = document.createElement("span");
      badge.className = "promo-badge";
      badge.textContent = match.badge;
      imageWrap.appendChild(badge);
    }

    if (match.note) {
      var info = cardEl.querySelector(".suite-info");
      var pricing = cardEl.querySelector(".suite-pricing");
      if (info) {
        var note = document.createElement("div");
        note.className = "promo-note";
        note.textContent = match.note;
        if (pricing) info.insertBefore(note, pricing);
        else info.appendChild(note);
      }
    }
  }

  /* ------------------------------ helpers ----------------------------- */

  function debounce(fn, ms) {
    var t;
    return function () {
      clearTimeout(t);
      t = setTimeout(fn, ms);
    };
  }
})();
