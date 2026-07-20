/* =============================================
   APARTHOTEL SIETE32 — Chat de preguntas frecuentes
   ---------------------------------------------
   Mini-chat sin IA: el visitante elige una pregunta
   predefinida y recibe la respuesta al instante, con
   WhatsApp como salida para todo lo demás.

   PROGRESSIVE ENHANCEMENT: si este script no carga,
   el botón flotante de WhatsApp original sigue ahí.
   ============================================= */
(function () {
  "use strict";

  var WSP_URL = "https://wa.me/529992551748?text=" +
    encodeURIComponent("Hola, tengo una duda sobre Aparthotel Siete32");

  var GREETING = "¡Hola! 👋 Bienvenido a Aparthotel Siete32. Elige una pregunta y te respondo al momento:";

  var FAQS = [
    {
      q: "¿Qué tipos de suite tienen y para cuántas personas?",
      a: "Tenemos 5 tipos de suite, desde 1 y hasta 5 personas:\n• Executive Jr. — 1 o 2 personas, desde $950 MXN/noche\n• Executive — 1 o 2 personas, desde $1,000 MXN/noche\n• Junior Suite — 2 a 4 personas, desde $1,150 MXN/noche\n• Master Suite Jr. — hasta 4 personas, desde $1,300 MXN/noche\n• Master Suite — hasta 5 personas, desde $1,300 MXN/noche\nTodas las tarifas incluyen impuestos. En la sección «Suites» puedes ver fotos y detalles de cada una."
    },
    {
      q: "¿Qué incluye cada suite?",
      a: "Todas nuestras suites incluyen: cocina equipada con refrigerador, Smart TV con cable, Wi-Fi de alta velocidad, aire acondicionado y ventilador, baño privado con toallas y amenidades, espejo para maquillaje, mesa de comedor/trabajo, limpieza diaria (incluido el lavado de la vajilla) y recepción 24/7."
    },
    {
      q: "¿Los niños pagan?",
      a: "Los menores de 10 años no pagan (hasta dos por reservación) en nuestras Junior y Master Suites. A partir del 3.er huésped puede aplicar un costo adicional de $150 MXN por persona, según el tipo de suite. Contamos con cuna disponible bajo solicitud, sin costo."
    },
    {
      q: "¿Tienen alguna promoción?",
      a: "Sí 🎉 Por cada 6 noches pagadas, la 7.ª noche es de cortesía. Ideal para estancias largas."
    },
    {
      q: "¿Tienen estacionamiento?",
      a: "Sí, contamos con estacionamiento gratuito para huéspedes, con cámaras de vigilancia."
    },
    {
      q: "¿Dónde están ubicados?",
      a: "En Av. República de Corea x 32 No. 612, Col. Maya, C.P. 97134, Mérida — Zona Altabrisa.\nEstamos a 150 m de importantes hospitales y plazas comerciales, a 200 m de laboratorios clínicos, a 100 m del ADO y con transporte público en la puerta. En la página de Inicio encuentras el mapa."
    },
    {
      q: "¿Tienen habitación con acceso para silla de ruedas?",
      a: "Sí. La Suite 25 (Master Suite) está en planta baja y adaptada para huéspedes con movilidad reducida, con agarraderas en el baño y puerta amplia para silla de ruedas. Escríbenos por WhatsApp para asegurar esta suite específica."
    },
    {
      q: "¿Qué puedo pedir en recepción?",
      a: "Sin costo, bajo solicitud: licuadora, tostadora, secadora de pelo, set de planchado, cuna para bebé, abridor de vino y kit de café.\nCon costo adicional: servicio de lavandería (la recepción recoge y entrega) y transporte especializado."
    },
    {
      q: "¿Cuáles son los horarios de entrada y salida?",
      a: "El check-in (entrada) es a las 3:00 pm y el check-out (salida) es a las 12:00 pm."
    },
    {
      q: "¿Cómo reservo?",
      a: "Puedes reservar en línea con el botón «Reservar Ahora» — eliges tus fechas y tipo de suite y pagas de forma segura. Si prefieres atención personal, escríbenos por WhatsApp o llámanos al +52 999 255 1748. Nuestra recepción atiende 24/7."
    }
  ];

  var ICON_CHAT = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>';
  var ICON_CLOSE = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';
  var ICON_WSP = '<svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>';

  var open = false;
  var asked = false;
  var launcher, panel, body, chips, moreBtn;

  document.addEventListener("DOMContentLoaded", init);

  function init() {
    // El chat sustituye al botón flotante de WhatsApp (la opción de
    // WhatsApp vive dentro del panel). Si el script falla, el botón
    // original nunca se oculta.
    var oldFloat = document.querySelector(".whatsapp-float");
    if (oldFloat) oldFloat.style.display = "none";

    buildLauncher();
    buildPanel();
  }

  /* ------------------------------ launcher ----------------------------- */

  function buildLauncher() {
    launcher = document.createElement("button");
    launcher.type = "button";
    launcher.className = "fq-launcher";
    launcher.setAttribute("aria-label", "Abrir chat de preguntas frecuentes");
    launcher.innerHTML = ICON_CHAT;
    launcher.addEventListener("click", toggle);
    document.body.appendChild(launcher);
  }

  /* ------------------------------- panel ------------------------------- */

  function buildPanel() {
    panel = document.createElement("div");
    panel.className = "fq-panel";
    panel.setAttribute("role", "dialog");
    panel.setAttribute("aria-label", "Preguntas frecuentes");

    var header = document.createElement("div");
    header.className = "fq-header";
    var titles = document.createElement("div");
    var h = document.createElement("strong");
    h.textContent = "Recepción virtual";
    var sub = document.createElement("span");
    sub.textContent = "Aparthotel Siete32 · respuestas al instante";
    titles.appendChild(h);
    titles.appendChild(sub);
    var closeBtn = document.createElement("button");
    closeBtn.type = "button";
    closeBtn.className = "fq-close";
    closeBtn.setAttribute("aria-label", "Cerrar chat");
    closeBtn.innerHTML = ICON_CLOSE;
    closeBtn.addEventListener("click", toggle);
    header.appendChild(titles);
    header.appendChild(closeBtn);

    body = document.createElement("div");
    body.className = "fq-body";
    addBubble("bot", GREETING);

    chips = document.createElement("div");
    chips.className = "fq-chips";
    FAQS.forEach(function (f) {
      var c = document.createElement("button");
      c.type = "button";
      c.className = "fq-chip";
      c.textContent = f.q;
      c.addEventListener("click", function () { answer(f); });
      chips.appendChild(c);
    });
    body.appendChild(chips);

    // Al responder, la lista de preguntas se colapsa en este botón para
    // que la respuesta quede a la vista sin tener que hacer scroll.
    moreBtn = document.createElement("button");
    moreBtn.type = "button";
    moreBtn.className = "fq-more";
    moreBtn.textContent = "Ver más preguntas";
    moreBtn.style.display = "none";
    moreBtn.addEventListener("click", function () {
      showChips(true);
      body.scrollTop = body.scrollHeight;
    });
    body.appendChild(moreBtn);

    var footer = document.createElement("div");
    footer.className = "fq-footer";
    var wsp = document.createElement("a");
    wsp.className = "fq-wsp";
    wsp.href = WSP_URL;
    wsp.target = "_blank";
    wsp.rel = "noopener";
    wsp.innerHTML = ICON_WSP + "<span>¿Otra duda? Escríbenos por WhatsApp</span>";
    footer.appendChild(wsp);

    panel.appendChild(header);
    panel.appendChild(body);
    panel.appendChild(footer);
    document.body.appendChild(panel);

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && open) toggle();
    });
  }

  /* ------------------------------ mensajes ----------------------------- */

  function addBubble(who, text) {
    var b = document.createElement("div");
    b.className = "fq-bubble fq-" + who;
    var lines = String(text).split("\n");
    lines.forEach(function (line, i) {
      b.appendChild(document.createTextNode(line));
      if (i < lines.length - 1) b.appendChild(document.createElement("br"));
    });
    // Las burbujas se insertan antes del bloque de preguntas para que
    // las opciones queden siempre al final de la conversación.
    if (chips && chips.parentNode === body) body.insertBefore(b, chips);
    else body.appendChild(b);
    return b;
  }

  function showChips(show) {
    chips.style.display = show ? "" : "none";
    moreBtn.style.display = show ? "none" : "";
  }

  function answer(faq) {
    asked = true;
    var q = addBubble("user", faq.q);
    addBubble("bot", faq.a);
    showChips(false);
    // Dejar la pregunta recién hecha al inicio del área visible,
    // con su respuesta justo debajo.
    body.scrollTop = Math.max(q.offsetTop - 12, 0);
  }

  /* ------------------------------- toggle ------------------------------ */

  function toggle() {
    open = !open;
    panel.classList.toggle("fq-open", open);
    launcher.innerHTML = open ? ICON_CLOSE : ICON_CHAT;
    launcher.setAttribute("aria-label", open
      ? "Cerrar chat de preguntas frecuentes"
      : "Abrir chat de preguntas frecuentes");
    if (open) body.scrollTop = asked ? body.scrollHeight : 0;
  }
})();
