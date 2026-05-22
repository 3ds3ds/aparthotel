/* =========================================================
   APARTHOTEL SIETE32 — Datos de habitaciones
   - "desc" = descripción corta para tarjetas en suites.html
   - "longDesc" = descripción tailored para studio.html (página individual)
   ========================================================= */

const ROOMS = [
  {
    id: "master-10", name: "Master Studio No.10", type: "Master",
    price: 1300, baseGuests: 3, extraCharge: 150, guests: 4,
    beds: "Capacidad para 4 personas", img: "suite-master.jpg", allowsChildren: true,
    desc: "Master Studio amplio con cocina totalmente equipada, ideal para familias y equipos de trabajo.",
    longDesc: "Nuestro Master Studio No. 10 es un espacio amplio con capacidad para hasta 4 personas, ideal para familias y equipos de trabajo. Cuenta con cocina totalmente equipada (estufa, refrigerador, microondas, cafetera, vajilla y cubertería), mesa de comedor y área de dormitorio cómoda. Incluye Smart TV con cable, Wi-Fi de alta velocidad, A/C, ventilador y baño privado con toallas y amenidades. Limpieza diaria incluida. Recepción 24/7."
  },
  {
    id: "jr-11", name: "Junior Studio No.11", type: "Junior",
    price: 1150, baseGuests: 1, extraCharge: 150, guests: 4,
    beds: "2 camas matrimoniales", img: "suite-junior.jpg", allowsChildren: true,
    desc: "Junior Studio con cocina completa, mesa de comedor y de trabajo, y área de dormitorio. Ideal para familias o estancias cómodas.",
    longDesc: "El Junior Studio No. 11 cuenta con dos camas matrimoniales y capacidad para 1 a 4 personas. Equipado con cocina completa (estufa, refrigerador, microondas y cafetera, vajilla y cubertería), mesa de comedor, mesa de trabajo y área de dormitorio cómoda. Incluye Smart TV con cable, Wi-Fi de alta velocidad, A/C, ventilador y baño privado con toallas y amenidades. Limpieza diaria incluida. Recepción 24/7."
  },
  {
    id: "jr-12", name: "Junior Studio No.12", type: "Junior",
    price: 1150, baseGuests: 1, extraCharge: 150, guests: 4,
    beds: "2 camas matrimoniales", img: "room-detail-3.jpg", allowsChildren: true,
    desc: "Junior Studio con cocina completa, mesa de comedor y de trabajo, y área de dormitorio. Espacio cómodo para tu estancia en Mérida.",
    longDesc: "El Junior Studio No. 12 ofrece dos camas matrimoniales y capacidad para 1 a 4 personas. Cocina completa con estufa, refrigerador, microondas y cafetera, vajilla y cubertería, mesa de comedor/trabajo y área de dormitorio. Smart TV con cable, Wi-Fi de alta velocidad, A/C, ventilador y baño privado con toallas y amenidades. Limpieza diaria incluida. Recepción 24/7. Ideal para familias o estancias prolongadas en Mérida."
  },
  {
    id: "jr-13", name: "Junior Studio No.13", type: "Junior",
    price: 1150, baseGuests: 1, extraCharge: 150, guests: 4,
    beds: "2 camas matrimoniales", img: "room-detail-4.jpg", allowsChildren: true,
    desc: "Junior Studio equipado con cocina completa, mesa de comedor y de trabajo, y área de dormitorio. Perfecto para familias o equipos de trabajo.",
    longDesc: "El Junior Studio No. 13 cuenta con dos camas matrimoniales y capacidad para 1 a 4 personas. Equipado con cocina completa, mesa de comedor/trabajo, Smart TV con cable, Wi-Fi de alta velocidad, A/C, ventilador y baño privado con amenidades. Limpieza diaria incluida. Recepción 24/7. Cómodo y funcional para familias o equipos de trabajo."
  },
  {
    id: "jr-14", name: "Junior Studio No.14", type: "Junior",
    price: 1150, baseGuests: 1, extraCharge: 150, guests: 4,
    beds: "2 camas queen size", img: "suite-junior.jpg", allowsChildren: true,
    desc: "Junior Studio con dos camas queen, cocina completa y mesa de comedor/trabajo. Ideal para familias o grupos pequeños.",
    longDesc: "El Junior Studio No. 14 cuenta con dos camas queen size y capacidad para 1 a 4 personas. Espacio cómodo con cocina completa, mesa de comedor/trabajo, Smart TV con cable, Wi-Fi de alta velocidad, A/C, ventilador y baño privado con toallas y amenidades. Limpieza diaria incluida. Recepción 24/7. Ideal para familias o grupos pequeños que buscan camas más amplias."
  },
  {
    id: "jr-15", name: "Junior Studio No.15", type: "Junior",
    price: 1150, baseGuests: 1, extraCharge: 150, guests: 3,
    beds: "1 cama king + 1 individual", img: "room-detail-3.jpg", allowsChildren: true,
    desc: "Junior Studio con cama king e individual, cocina completa y mesa de comedor/trabajo. Cómodo para estancias familiares o de trabajo.",
    longDesc: "El Junior Studio No. 15 cuenta con una cama king size y una cama individual, capacidad para 1 a 3 personas. Cocina completa, mesa de comedor/trabajo, Smart TV con cable, Wi-Fi de alta velocidad, A/C, ventilador y baño privado con amenidades. Limpieza diaria incluida. Recepción 24/7. Ideal para parejas con un menor o estancias familiares cortas."
  },
  {
    id: "jr-16", name: "Junior Studio No.16", type: "Junior",
    price: 1150, baseGuests: 1, extraCharge: 150, guests: 3,
    beds: "1 cama king + 1 individual", img: "room-detail-4.jpg", allowsChildren: true,
    desc: "Junior Studio con cama king e individual, cocina completa y mesa de comedor/trabajo. Espacio funcional y cómodo.",
    longDesc: "El Junior Studio No. 16 ofrece una cama king size y una cama individual, capacidad para 1 a 3 personas. Cocina completa, mesa de comedor/trabajo, Smart TV con cable, Wi-Fi de alta velocidad, A/C, ventilador y baño privado. Limpieza diaria incluida. Recepción 24/7. Funcional y cómodo para una pareja con menor o un viajero de trabajo con acompañante."
  },
  {
    id: "exec-17", name: "Executive Studio No.17", type: "Executive",
    price: 950, baseGuests: 1, extraCharge: 0, guests: 2,
    beds: "1 cama queen size", img: "suite-executive.jpg", allowsChildren: true, noStove: true,
    desc: "Executive Studio con microondas, cafetera, frigobar, vajilla y cubertería. Cuenta con mesa de comedor/trabajo, ideal para estancias de 1 o 2 personas.",
    longDesc: "El Executive Studio No. 17 es ideal para 1 o 2 personas, con una cama queen size. Cuenta con microondas, cafetera, frigobar, vajilla y cubertería, mesa de comedor/trabajo, Smart TV con cable, Wi-Fi de alta velocidad, A/C, ventilador y baño privado con toallas y amenidades. Limpieza diaria incluida. Recepción 24/7. Perfecto para viajeros que buscan una estancia compacta y cómoda en Mérida."
  },
  {
    id: "master-18", name: "Master Studio No.18", type: "Master",
    price: 1300, baseGuests: 3, extraCharge: 150, guests: 5,
    beds: "1 cama king + camas adicionales", img: "suite-master.jpg", allowsChildren: true,
    desc: "Master Studio amplio con cama king y cocina totalmente equipada. Espacio cómodo y funcional para familias o equipos de trabajo.",
    longDesc: "El Master Studio No. 18 es uno de nuestros espacios más amplios, con capacidad para hasta 5 personas. Equipado con una cama king size más camas adicionales, cocina totalmente equipada (estufa, refrigerador, microondas, cafetera, vajilla y cubertería) y mesa de comedor. Incluye Smart TV con cable, Wi-Fi de alta velocidad, A/C, ventilador y baño privado con toallas y amenidades. Limpieza diaria incluida. Recepción 24/7."
  },
  {
    id: "master-19", name: "Master Studio No.19", type: "Master",
    price: 1300, baseGuests: 3, extraCharge: 150, guests: 5,
    beds: "1 cama queen + camas adicionales", img: "portada-master.png", allowsChildren: true, hasSofa: true,
    desc: "Master Studio con cama queen, sofá y cocina totalmente equipada. Amplio y cómodo para familias o equipos de trabajo.",
    longDesc: "El Master Studio No. 19 es un espacio amplio con capacidad para hasta 5 personas, con cama queen size más camas adicionales y un sofá para mayor confort. Cocina totalmente equipada, mesa de comedor, Smart TV con cable, Wi-Fi de alta velocidad, A/C, ventilador y baño privado con toallas y amenidades. Limpieza diaria incluida. Recepción 24/7. Ideal para familias grandes o equipos de trabajo."
  },
  {
    id: "exec-20", name: "Executive Studio No.20", type: "Executive",
    price: 1000, baseGuests: 1, extraCharge: 0, guests: 2,
    beds: "1 cama king size", img: "portada-exec.png", floor: "Planta Baja", allowsChildren: false, frigobar: true,
    desc: "Executive Studio en planta baja con cama king, cocina totalmente equipada y frigobar. Acceso sin escalones, ideal para 1 o 2 personas.",
    longDesc: "El Executive Studio No. 20 está en planta baja, con cama king size y capacidad para 1 o 2 personas. Cocina totalmente equipada con frigobar, mesa de comedor/trabajo, Smart TV con cable, Wi-Fi de alta velocidad, A/C, ventilador y baño privado con amenidades. Acceso sin escalones. Limpieza diaria incluida. Recepción 24/7. Habitación para adultos."
  },
  {
    id: "exec-21", name: "Executive Studio No.21", type: "Executive",
    price: 1000, baseGuests: 1, extraCharge: 0, guests: 2,
    beds: "1 cama king size", img: "suite-executive.jpg", floor: "Planta Baja", allowsChildren: false, frigobar: true,
    desc: "Executive Studio en planta baja con cama king, cocina totalmente equipada y frigobar. Acceso sin escalones, ideal para 1 o 2 personas.",
    longDesc: "El Executive Studio No. 21 está en planta baja, con cama king size y capacidad para 1 o 2 personas. Cocina totalmente equipada con frigobar, mesa de comedor/trabajo, Smart TV con cable, Wi-Fi de alta velocidad, A/C, ventilador y baño privado con toallas y amenidades. Acceso sin escalones, ideal para huéspedes que prefieren evitar escaleras. Limpieza diaria incluida. Recepción 24/7. Habitación para adultos."
  },
  {
    id: "exec-22", name: "Executive Studio No.22", type: "Executive",
    price: 1000, baseGuests: 1, extraCharge: 0, guests: 2,
    beds: "1 cama king size", img: "portada-exec.png", floor: "Planta Baja", allowsChildren: false, frigobar: true,
    desc: "Executive Studio en planta baja con cama king, cocina totalmente equipada y frigobar. Acceso sin escalones, ideal para 1 o 2 personas.",
    longDesc: "El Executive Studio No. 22 está en planta baja, con cama king size y capacidad para 1 o 2 personas. Cocina totalmente equipada con frigobar, mesa de comedor/trabajo, Smart TV con cable, Wi-Fi de alta velocidad, A/C, ventilador y baño privado con amenidades. Acceso sin escalones. Limpieza diaria incluida. Recepción 24/7. Habitación para adultos."
  },
  {
    id: "jr-23", name: "Junior Studio No.23", type: "Junior",
    price: 1150, baseGuests: 1, extraCharge: 150, guests: 4,
    beds: "2 camas matrimoniales", img: "suite-junior.jpg", floor: "Planta Baja", allowsChildren: true, frigobar: true,
    desc: "Junior Studio amplio en planta baja con dos camas matrimoniales, cocina totalmente equipada y frigobar. Acceso sin escalones.",
    longDesc: "El Junior Studio No. 23 está en planta baja, con acceso sin escalones. Cuenta con dos camas matrimoniales y capacidad para 1 a 4 personas. Cocina totalmente equipada con frigobar, mesa de comedor/trabajo, Smart TV con cable, Wi-Fi de alta velocidad, A/C, ventilador y baño privado con toallas y amenidades. Limpieza diaria incluida. Recepción 24/7. Ideal para familias o huéspedes que prefieren evitar escaleras."
  },
  {
    id: "jr-24", name: "Junior Studio No.24", type: "Junior",
    price: 1150, baseGuests: 1, extraCharge: 150, guests: 4,
    beds: "2 camas matrimoniales", img: "portada-junior.png", floor: "Planta Baja", allowsChildren: true, frigobar: true,
    desc: "Junior Studio amplio en planta baja con dos camas matrimoniales, cocina totalmente equipada y frigobar. Acceso sin escalones.",
    longDesc: "El Junior Studio No. 24 está en planta baja con acceso sin escalones. Dos camas matrimoniales, capacidad para 1 a 4 personas, cocina totalmente equipada con frigobar, mesa de comedor/trabajo, Smart TV con cable, Wi-Fi de alta velocidad, A/C, ventilador y baño privado con amenidades. Limpieza diaria incluida. Recepción 24/7. Cómodo para familias en estancias prolongadas."
  },
  {
    id: "master-25", name: "Master Studio No.25", type: "Master",
    price: 1300, baseGuests: 3, extraCharge: 150, guests: 5,
    beds: "Camas para hasta 5 personas", img: "room-detail-1.jpg", floor: "Planta Baja", allowsChildren: true, frigobar: true, accessible: true,
    desc: "Master Studio amplio en planta baja, equipado especialmente para huéspedes con movilidad reducida: agarraderas en el baño y puerta amplia para silla de ruedas. Cocina totalmente equipada y frigobar.",
    longDesc: "El Master Studio No. 25 es nuestro espacio más accesible: está en planta baja y equipado especialmente para huéspedes con movilidad reducida, con agarraderas en el baño y puerta amplia para silla de ruedas. Capacidad para hasta 5 personas, cocina totalmente equipada con frigobar, mesa de comedor, Smart TV con cable, Wi-Fi de alta velocidad, A/C, ventilador y baño privado adaptado. Limpieza diaria incluida. Recepción 24/7. Ideal para pacientes en recuperación, acompañantes o familias con un miembro con movilidad reducida."
  }
];

/* --- Helpers --- */
function kitchenLabel(r) {
  if (r.noStove) return "Microondas, cafetera y frigobar";
  if (r.frigobar) return "Cocina totalmente equipada (frigobar)";
  return "Cocina totalmente equipada";
}

function detailLinkFor(r) {
  return `studio.html#${r.id}`;
}

function renderRooms(filter, minGuests) {
  minGuests = minGuests || 0;
  const container = document.getElementById('rooms-grid');
  if (!container) return;
  let filtered = filter === 'all' ? ROOMS : ROOMS.filter(r => r.type === filter);
  if (minGuests > 0) filtered = filtered.filter(r => r.guests >= minGuests);

  if (filtered.length === 0) {
    container.innerHTML = '<p class="no-results">No se encontraron studios para esa cantidad de huéspedes. Intenta con menos personas o cambia el tipo.</p>';
    return;
  }

  const icons = {
    bed: '<svg viewBox="0 0 24 24"><path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/></svg>',
    kitchen: '<svg viewBox="0 0 24 24"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/></svg>',
    ac: '<svg viewBox="0 0 24 24"><path d="M8 2v4"/><path d="M16 2v4"/><path d="M12 2v4"/><path d="M3 10h18"/><path d="M3 10v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6"/><path d="M8 22v-4"/><path d="M16 22v-4"/><path d="M12 22v-4"/></svg>',
    wifi: '<svg viewBox="0 0 24 24"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><circle cx="12" cy="20" r="1"/></svg>',
    tv: '<svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="15" rx="2" ry="2"/><polyline points="17 2 12 7 7 2"/></svg>',
    clean: '<svg viewBox="0 0 24 24"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',
    accessible: '<svg viewBox="0 0 24 24"><circle cx="12" cy="4" r="2"/><path d="M19 13v-2a7 7 0 0 0-14 0v2"/><path d="M5 13l3 8h8l3-8"/></svg>',
    reception: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>'
  };

  container.innerHTML = filtered.map(r => {
    const baseLabel = r.baseGuests === 1 ? '1 persona' : `${r.baseGuests} personas`;

    // Build the policy line. We never write "no aplica para menores":
    // if the room doesn't allow children, the line is just omitted.
    const policyParts = [];
    if (r.extraCharge) policyParts.push(`+$${r.extraCharge} por persona adicional`);
    if (r.allowsChildren) policyParts.push('Menores de 10 años gratis (hasta 2)');
    const policyLine = policyParts.join(' · ');

    return `
    <article class="suite-card fade-up" id="${r.id}">
      <div class="suite-image">
        <img src="assets/images/${r.img}" alt="${r.name}" loading="lazy">
        <span class="suite-badge">Hasta ${r.guests} Personas</span>
        ${r.floor ? '<span class="suite-badge suite-badge-floor">'+r.floor+'</span>' : ''}
      </div>
      <div class="suite-info">
        <h3>${r.name}</h3>
        <p class="suite-desc">${r.desc}</p>
        <div class="suite-amenities">
          <div class="suite-amenity">${icons.bed}<span>${r.beds}</span></div>
          <div class="suite-amenity">${icons.kitchen}<span>${kitchenLabel(r)}</span></div>
          <div class="suite-amenity">${icons.tv}<span>Smart TV con cable</span></div>
          <div class="suite-amenity">${icons.wifi}<span>Wi-Fi de alta velocidad</span></div>
          <div class="suite-amenity">${icons.clean}<span>Limpieza diaria incluida</span></div>
          <div class="suite-amenity">${icons.ac}<span>A/C y ventilador</span></div>
          <div class="suite-amenity">${icons.reception}<span>Recepción 24/7</span></div>
          ${r.accessible ? '<div class="suite-amenity">'+icons.accessible+'<span>Habitación accesible (silla de ruedas)</span></div>' : ''}
        </div>
        <div class="suite-pricing">
          <div>
            <span class="price-label">Desde (${baseLabel})</span>
            <div class="price">$${r.price.toLocaleString()} <span>MXN / noche</span></div>
            ${policyLine ? '<span class="price-extra">'+policyLine+'</span>' : ''}
            <span class="price-tax">Impuestos incluidos</span>
          </div>
          <a href="${detailLinkFor(r)}" class="btn btn-primary">Ver Detalles</a>
        </div>
        <div class="suite-promo">🎉 1 noche de cortesía por cada semana de estancia</div>
      </div>
    </article>
  `; }).join('');

  // Re-observe for animations
  document.querySelectorAll('#rooms-grid .fade-up').forEach(el => {
    el.classList.remove('visible');
    if (window._roomObserver) window._roomObserver.observe(el);
  });
}

function getActiveFilter() {
  const active = document.querySelector('.filter-btn.active');
  return active ? active.dataset.filter : 'all';
}

function getSelectedGuests() {
  const sel = document.getElementById('search-guests');
  return sel ? parseInt(sel.value, 10) || 0 : 0;
}

// Read ?filter= from the URL and return one of: all|Master|Junior|Executive
function getFilterFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const f = (params.get('filter') || '').toLowerCase();
  if (f === 'master') return 'Master';
  if (f === 'junior') return 'Junior';
  if (f === 'executive') return 'Executive';
  return 'all';
}

document.addEventListener('DOMContentLoaded', () => {
  window._roomObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); window._roomObserver.unobserve(e.target); } });
  }, { threshold: 0.1 });

  // Apply initial filter from URL (e.g., suites.html?filter=Master)
  const initialFilter = getFilterFromUrl();
  renderRooms(initialFilter, 0);

  // Sync the active filter button
  document.querySelectorAll('.filter-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.filter === initialFilter);
  });

  // Type filter buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderRooms(btn.dataset.filter, getSelectedGuests());
    });
  });

  // Search button
  const applyBtn = document.getElementById('search-apply');
  if (applyBtn) {
    applyBtn.addEventListener('click', () => {
      renderRooms(getActiveFilter(), getSelectedGuests());
    });
  }

  // Filter on guest change instantly
  const guestSel = document.getElementById('search-guests');
  if (guestSel) {
    guestSel.addEventListener('change', () => {
      renderRooms(getActiveFilter(), getSelectedGuests());
    });
  }

  // Scroll to the right card if URL has hash (#master-10)
  if (window.location.hash && document.getElementById('rooms-grid')) {
    setTimeout(() => {
      const target = document.querySelector(window.location.hash);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 250);
  }
});
