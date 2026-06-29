/* =========================================================
   APARTHOTEL SIETE32 — Tipos de habitación
   ---------------------------------------------------------
   El sitio se organiza por TIPO de habitación (igual que en
   Little Hotelier, Booking, Expedia y Airbnb), no por unidad
   individual. Cada tipo agrupa varias unidades físicas: el
   huésped reserva el tipo y la propiedad asigna la unidad.

   - "units"      = números de studio que pertenecen al tipo
   - "desc"       = descripción corta para las tarjetas
   - "longDesc"   = descripción para la página de detalle
   - "gallery"    = fotos del tipo, cada una etiquetada con su studio
   ========================================================= */

// Motor de reservas de Little Hotelier (provisional hasta tener
// la URL por tipo/propiedad). Agrega `bookingUrl` a un tipo para
// sobreescribirla.
const BOOKING_URL = "https://direct-book.com/properties/aparthotelsiete32direct";

const ROOM_TYPES = [
  {
    id: "executive",
    name: "Executive",
    units: ["20", "21", "22"],
    bookingUrl: "https://direct-book.com/properties/aparthotelsiete32direct?room_type=182367",
    guestsMin: 1, guestsMax: 2,
    priceFrom: 1000,
    capacity: "1 a 2 personas",
    badge: "Hasta 2 Personas",
    beds: "1 cama king size",
    kitchen: "full-frigobar",
    adultsOnly: false,
    groundFloor: "all",
    accessible: null,
    allowsChildren: false,
    cardImg: "exec-21-22-2.jpg",
    gallery: [
      { img: "exec-21-22-1.jpg", room: "21 y 22" },
      { img: "exec-21-22-2.jpg", room: "21 y 22" },
      { img: "exec-21-22-3.jpg", room: "21 y 22" },
      { img: "exec-22-1.jpg", room: "22" },
      { img: "exec-22-2.jpg", room: "22" },
      { img: "exec-22-3.jpg", room: "22" }
    ],
    desc: "Studio en planta baja con cama king y cocina equipada con frigobar. Para 1 o 2 personas.",
    longDesc: "El Executive es un studio en planta baja con cama king size y capacidad para 1 o 2 personas. Cuenta con cocina totalmente equipada con frigobar, mesa de comedor/trabajo, Smart TV, Wi-Fi de alta velocidad, A/C, ventilador y baño privado con toallas y amenidades. Acceso sin escalones, ideal para quienes prefieren evitar escaleras. Limpieza diaria incluida. Recepción 24/7. Este tipo incluye los studios 20, 21 y 22."
  },
  {
    id: "executive-jr",
    name: "Executive Jr.",
    units: ["17"],
    bookingUrl: "https://direct-book.com/properties/aparthotelsiete32direct?room_type=493878",
    guestsMin: 1, guestsMax: 2,
    priceFrom: 950,
    capacity: "1 a 2 personas",
    badge: "Hasta 2 Personas",
    beds: "1 cama queen size",
    kitchen: "kitchenette",
    adultsOnly: false,
    groundFloor: false,
    accessible: null,
    allowsChildren: false,
    cardImg: "execjr-17-1.jpg",
    gallery: [
      { img: "execjr-17-1.jpg", room: "17" },
      { img: "execjr-17-2.jpg", room: "17" }
    ],
    desc: "Studio con cama queen, microondas, cafetera y frigobar. Ideal para 1 o 2 personas.",
    longDesc: "El Executive Jr. es ideal para 1 o 2 personas, con una cama queen size. Cuenta con microondas, cafetera y frigobar, vajilla y cubertería, mesa de comedor/trabajo, Smart TV, Wi-Fi de alta velocidad, A/C, ventilador y baño privado con toallas y amenidades. Limpieza diaria incluida. Recepción 24/7. Perfecto para viajeros que buscan una estancia cómoda en Mérida. Este tipo corresponde al studio 17."
  },
  {
    id: "junior-suite",
    name: "Junior Studio",
    units: ["11", "12", "13", "14", "15", "16", "23", "24"],
    bookingUrl: "https://direct-book.com/properties/aparthotelsiete32direct?room_type=182368",
    guestsMin: 2, guestsMax: 4,
    priceFrom: 1150,
    capacity: "2 a 4 personas",
    badge: "Hasta 4 Personas",
    beds: "Dos matrimoniales, dos queen size o una king size + una individual",
    kitchen: "full",
    adultsOnly: false,
    groundFloor: "some",
    accessible: null,
    allowsChildren: true,
    cardImg: "jr-11-14-3.jpg",
    gallery: [
      { img: "jr-11-14-1.jpg", room: "11, 12, 13 y 14" },
      { img: "jr-11-14-2.jpg", room: "11, 12, 13 y 14" },
      { img: "jr-11-14-3.jpg", room: "11, 12, 13 y 14" },
      { img: "jr-15-16-1.jpg", room: "15 y 16" },
      { img: "jr-15-16-2.jpg", room: "15 y 16" },
      { img: "jr-15-16-3.jpg", room: "15 y 16" },
      { img: "jr-23-24-1.jpg", room: "23 y 24" },
      { img: "jr-23-24-2.jpg", room: "23 y 24" },
      { img: "jr-23-24-3.jpg", room: "23 y 24" }
    ],
    desc: "Cocina completa. Ofrecemos variedad en la configuración de las camas: dos matrimoniales, dos queen size o una king size + una individual.",
    longDesc: "El Junior Studio es nuestro tipo con mayor disponibilidad. Cuenta con cocina completa (estufa, refrigerador, microondas y cafetera, vajilla y cubertería), mesa de comedor/trabajo y área de dormitorio cómoda. Capacidad de 2 a 4 personas, con distintas configuraciones de cama según la unidad: dos camas matrimoniales, dos camas queen size, o una cama king size con una individual. Smart TV, Wi-Fi de alta velocidad, A/C, ventilador y baño privado con toallas y amenidades. Contamos con studios en planta alta y planta baja. Limpieza diaria incluida. Recepción 24/7. Este tipo incluye los studios 11, 12, 13, 14, 15, 16, 23 y 24."
  },
  {
    id: "master-suite",
    name: "Master Studio",
    units: ["18", "19", "25"],
    bookingUrl: "https://direct-book.com/properties/aparthotelsiete32direct?room_type=182369",
    guestsMin: 3, guestsMax: 5,
    priceFrom: 1300,
    capacity: "Hasta 5 personas",
    badge: "Hasta 5 Personas",
    beds: "King/queen + 3 individuales, o 2 matrimoniales + 1 individual (según unidad)",
    kitchen: "full",
    adultsOnly: false,
    groundFloor: "some",
    accessible: { room: "25" },
    allowsChildren: true,
    cardImg: "master-18-1.jpg",
    gallery: [
      { img: "master-18-1.jpg", room: "18" },
      { img: "master-18-2.jpg", room: "18" },
      { img: "master-18-3.jpg", room: "18" },
      { img: "master-18-4.jpg", room: "18" },
      { img: "master-19-1.jpg", room: "19" },
      { img: "master-19-2.jpg", room: "19" },
      { img: "master-19-3.jpg", room: "19" },
      { img: "master-25-1.jpg", room: "25" },
      { img: "master-25-2.jpg", room: "25" },
      { img: "master-25-3.jpg", room: "25" },
      { img: "master-25-4.jpg", room: "25" }
    ],
    desc: "Nuestro espacio más amplio, hasta 5 personas. Contamos con una habitación accesible para silla de ruedas (Studio 25).",
    longDesc: "El Master Studio es nuestro espacio más amplio, con capacidad para hasta 5 personas y cocina totalmente equipada (estufa, refrigerador, microondas, cafetera, vajilla y cubertería), mesa de comedor/trabajo, Smart TV, Wi-Fi de alta velocidad, A/C, ventilador y baño privado con toallas y amenidades. Distintas configuraciones según la unidad: cama king o queen con tres camas individuales (y sofá en una de ellas); el Studio 25 cuenta con dos camas matrimoniales y una individual, en planta baja. Limpieza diaria incluida. Recepción 24/7. ♿ Una de nuestras unidades, el Studio 25, está en planta baja y adaptada para huéspedes con movilidad reducida (agarraderas en el baño y puerta amplia para silla de ruedas). Si necesitas esta habitación específica, contáctanos para asegurarla. Este tipo incluye los studios 18, 19 y 25."
  },
  {
    id: "master-suite-jr",
    name: "Master Studio Jr.",
    units: ["10"],
    bookingUrl: "https://direct-book.com/properties/aparthotelsiete32direct?room_type=493879",
    guestsMin: 3, guestsMax: 4,
    priceFrom: 1300,
    capacity: "Hasta 4 personas",
    badge: "Hasta 4 Personas",
    beds: "4 camas individuales",
    kitchen: "full",
    adultsOnly: false,
    groundFloor: false,
    accessible: null,
    allowsChildren: true,
    cardImg: "masterjr-10-1.jpg",
    gallery: [
      { img: "masterjr-10-1.jpg", room: "10" },
      { img: "masterjr-10-2.jpg", room: "10" },
      { img: "masterjr-10-3.jpg", room: "10" },
      { img: "masterjr-10-4.jpg", room: "10" }
    ],
    desc: "Cuatro camas individuales y cocina totalmente equipada. Ideal para familias o equipos, hasta 4 personas.",
    longDesc: "El Master Studio Jr. es un espacio amplio con cuatro camas individuales y capacidad para hasta 4 personas, ideal para familias y equipos de trabajo. Cuenta con cocina totalmente equipada (estufa, refrigerador, microondas, cafetera, vajilla y cubertería), mesa de comedor/trabajo y área de dormitorio cómoda. Smart TV, Wi-Fi de alta velocidad, A/C, ventilador y baño privado con toallas y amenidades. Limpieza diaria incluida. Recepción 24/7. Este tipo corresponde al studio 10."
  }
];

/* --- Helpers --- */
function bookingUrlFor(t) { return (t && t.bookingUrl) || BOOKING_URL; }

function kitchenLabel(t) {
  if (t.kitchen === 'kitchenette') return 'Microondas, cafetera y frigobar';
  if (t.kitchen === 'full-frigobar') return 'Cocina totalmente equipada (frigobar)';
  return 'Cocina totalmente equipada';
}

function detailLinkFor(t) { return 'studio.html#' + t.id; }

// Build a Little Hotelier booking link, optionally with the dates/guests
// the visitor entered in the suites.html search bar.
function bookingUrlWithSearch(t) {
  const base = bookingUrlFor(t);
  const ci = (document.getElementById('search-checkin') || {}).value || '';
  const co = (document.getElementById('search-checkout') || {}).value || '';
  const g = parseInt(((document.getElementById('search-guests') || {}).value || '0'), 10) || 0;
  const params = [];
  if (ci) params.push('check_in=' + encodeURIComponent(ci));
  if (co) params.push('check_out=' + encodeURIComponent(co));
  if (g > 0) params.push('number_of_guests=' + g);
  var sep = base.indexOf('?') === -1 ? '?' : '&';
  return params.length ? base + sep + params.join('&') : base;
}

const ICONS = {
  bed: '<svg viewBox="0 0 24 24"><path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/></svg>',
  kitchen: '<svg viewBox="0 0 24 24"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/></svg>',
  ac: '<svg viewBox="0 0 24 24"><path d="M8 2v4"/><path d="M16 2v4"/><path d="M12 2v4"/><path d="M3 10h18"/><path d="M3 10v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6"/><path d="M8 22v-4"/><path d="M16 22v-4"/><path d="M12 22v-4"/></svg>',
  wifi: '<svg viewBox="0 0 24 24"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><circle cx="12" cy="20" r="1"/></svg>',
  tv: '<svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="15" rx="2" ry="2"/><polyline points="17 2 12 7 7 2"/></svg>',
  clean: '<svg viewBox="0 0 24 24"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',
  accessible: '<svg viewBox="0 0 24 24"><circle cx="12" cy="4" r="2"/><path d="M19 13v-2a7 7 0 0 0-14 0v2"/><path d="M5 13l3 8h8l3-8"/></svg>',
  reception: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>'
};

function typeCardHTML(t) {
  const adultsBadge = t.adultsOnly
    ? '<span class="suite-badge suite-badge-floor">Solo adultos</span>' : '';
  const accessibleAmenity = t.accessible
    ? '<div class="suite-amenity">' + ICONS.accessible + '<span>Unidad accesible disponible (Studio ' + t.accessible.room + ')</span></div>'
    : '';
  return '' +
  '<article class="suite-card fade-up" id="' + t.id + '">' +
    '<div class="suite-image">' +
      '<img src="assets/images/' + t.cardImg + '" alt="' + t.name + '" loading="lazy">' +
      '<span class="suite-badge">' + t.badge + '</span>' +
      adultsBadge +
    '</div>' +
    '<div class="suite-info">' +
      '<h3>' + t.name + '</h3>' +
      '<p class="suite-desc">' + t.desc + '</p>' +
      '<div class="suite-amenities">' +
        '<div class="suite-amenity">' + ICONS.bed + '<span>' + t.beds + '</span></div>' +
        '<div class="suite-amenity">' + ICONS.kitchen + '<span>' + kitchenLabel(t) + '</span></div>' +
        '<div class="suite-amenity">' + ICONS.tv + '<span>Smart TV</span></div>' +
        '<div class="suite-amenity">' + ICONS.wifi + '<span>Wi-Fi de alta velocidad</span></div>' +
        '<div class="suite-amenity">' + ICONS.clean + '<span>Limpieza diaria incluida</span></div>' +
        '<div class="suite-amenity">' + ICONS.ac + '<span>A/C y ventilador</span></div>' +
        '<div class="suite-amenity">' + ICONS.reception + '<span>Recepción 24/7</span></div>' +
        accessibleAmenity +
      '</div>' +
      '<div class="suite-pricing">' +
        '<div>' +
          '<span class="price-label">Desde · ' + t.capacity + '</span>' +
          '<div class="price">$' + t.priceFrom.toLocaleString('en-US') + ' <span>MXN / noche</span></div>' +
          '<span class="price-tax">Impuestos incluidos</span>' +
          '<a class="suite-detail-link" href="' + detailLinkFor(t) + '">Ver detalles y fotos →</a>' +
        '</div>' +
        '<a href="' + bookingUrlWithSearch(t) + '" target="_blank" rel="noopener" class="btn btn-primary">Reservar</a>' +
      '</div>' +
      '<div class="suite-promo">🎉 Paga 6 noches, la 7.ª es de cortesía</div>' +
    '</div>' +
  '</article>';
}

function renderTypes(minGuests) {
  minGuests = minGuests || 0;
  const container = document.getElementById('rooms-grid');
  if (!container) return;

  let list = ROOM_TYPES;
  if (minGuests > 0) list = list.filter(t => t.guestsMax >= minGuests);
  // Mostrar de la tarifa más baja a la más alta; a igual precio, primero la
  // de menor capacidad (p. ej. Master Studio Jr. antes que Master Studio).
  list = list.slice().sort((a, b) => a.priceFrom - b.priceFrom || a.guestsMax - b.guestsMax);

  if (list.length === 0) {
    container.innerHTML = '<p class="no-results">No tenemos un tipo para esa cantidad de huéspedes. Prueba con menos personas o escríbenos por WhatsApp.</p>';
    return;
  }

  container.innerHTML = list.map(typeCardHTML).join('');

  document.querySelectorAll('#rooms-grid .fade-up').forEach(el => {
    el.classList.remove('visible');
    if (window._roomObserver) window._roomObserver.observe(el);
  });
}

function getSelectedGuests() {
  const sel = document.getElementById('search-guests');
  return sel ? parseInt(sel.value, 10) || 0 : 0;
}

document.addEventListener('DOMContentLoaded', () => {
  window._roomObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); window._roomObserver.unobserve(e.target); } });
  }, { threshold: 0.1 });

  // Render all types
  renderTypes(0);

  // Re-filter when the guest count changes or "Buscar" is pressed.
  const guestSel = document.getElementById('search-guests');
  if (guestSel) guestSel.addEventListener('change', () => renderTypes(getSelectedGuests()));

  const applyBtn = document.getElementById('search-apply');
  if (applyBtn) applyBtn.addEventListener('click', () => renderTypes(getSelectedGuests()));

  // Scroll to a type card if the URL has a hash (e.g. suites.html#master-suite)
  if (window.location.hash && document.getElementById('rooms-grid')) {
    setTimeout(() => {
      const target = document.querySelector(window.location.hash);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 250);
  }
});
