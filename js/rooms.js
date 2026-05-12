const ROOMS = [
  { id:"master-10", name:"Master Suite No.10", type:"Master", price:1200, beds:"4 camas individuales", guests:4, img:"suite-master.jpg",
    desc:"Amplia suite equipada con cuatro camas individuales. Cocina integral con estufa, refrigerador, horno de microondas y cafetera con kit, vajilla y cubertería, equipo de planchado, mesa de comedor, A/C, ventilador, TV con cable, WiFi y baño privado con toallas y amenidades." },
  { id:"jr-11", name:"Jr. Suite No.11", type:"Junior", price:1050, beds:"2 camas matrimoniales", guests:3, img:"suite-junior.jpg",
    desc:"Amplia suite equipada con dos camas matrimoniales. Cocina integral con estufa, refrigerador, horno de microondas y cafetera con kit, vajilla y cubertería, equipo de planchado, mesa de comedor, A/C, ventilador, TV con cable, WiFi y baño privado con toallas y amenidades." },
  { id:"jr-12", name:"Jr. Suite No.12", type:"Junior", price:1050, beds:"2 camas matrimoniales", guests:4, img:"room-detail-3.jpg",
    desc:"Amplia suite equipada con dos camas matrimoniales. Cocina integral con estufa, refrigerador, horno de microondas y cafetera con kit, vajilla y cubertería, equipo de planchado, mesa de comedor, A/C, ventilador, TV con cable, WiFi y baño privado con toallas y amenidades." },
  { id:"jr-13", name:"Jr. Suite No.13", type:"Junior", price:1050, beds:"2 camas matrimoniales", guests:4, img:"room-detail-4.jpg",
    desc:"Amplia suite equipada con dos camas matrimoniales. Cocina integral con estufa, refrigerador, horno de microondas y cafetera con kit, vajilla y cubertería, equipo de planchado, mesa de comedor, A/C, ventilador, TV con cable, WiFi y baño privado con toallas y amenidades." },
  { id:"jr-14", name:"Jr. Suite No.14", type:"Junior", price:1050, beds:"2 camas queen size", guests:4, img:"suite-junior.jpg",
    desc:"Amplia suite equipada con dos camas queen size. Cocina integral con estufa, refrigerador, horno de microondas y cafetera con kit, vajilla y cubertería, equipo de planchado, mesa de comedor, A/C, ventilador, TV con cable, WiFi y baño privado con toallas y amenidades." },
  { id:"jr-15", name:"Jr. Suite No.15", type:"Junior", price:1050, beds:"1 king size + 1 individual", guests:3, img:"room-detail-3.jpg",
    desc:"Amplia suite equipada con una cama king size y una individual. Cocina integral con estufa, refrigerador, horno de microondas y cafetera con kit, vajilla y cubertería, equipo de planchado, mesa de comedor, A/C, ventilador, TV con cable, WiFi y baño privado con toallas y amenidades." },
  { id:"jr-16", name:"Jr. Suite No.16", type:"Junior", price:1050, beds:"1 king size + 1 individual", guests:3, img:"room-detail-4.jpg",
    desc:"Amplia suite equipada con una cama king size y una individual. Cocina integral con estufa, refrigerador, horno de microondas y cafetera con kit, vajilla y cubertería, equipo de planchado, mesa de comedor, A/C, ventilador, TV con cable, WiFi y baño privado con toallas y amenidades." },
  { id:"exec-17", name:"Executive Suite No.17", type:"Executive", price:900, beds:"1 cama queen size", guests:2, img:"suite-executive.jpg",
    desc:"Suite equipada con una cama queen size. Con refrigerador, horno de microondas y cafetera con kit, vajilla y cubertería, equipo de planchado, mesa de comedor/trabajo, A/C, ventilador, TV con cable, WiFi y baño privado con toallas y amenidades." },
  { id:"master-18", name:"Master Suite No.18", type:"Master", price:1200, beds:"1 queen size + 3 individuales", guests:5, img:"suite-master.jpg",
    desc:"Suite amplia de 45 m² con 1 cama queen size y 3 individuales. A/C, ventilador, sofá, WiFi de alta velocidad, TV pantalla plana con cable, radio/reloj/despertador. Baño completo con amenidades y secador de pelo. Cocina equipada con estufa eléctrica, refrigerador, microondas, cafetera con kit, mesa comedor/trabajo, vajilla y cubertería.", area:"45 m²" },
  { id:"master-19", name:"Master Suite No.19", type:"Master", price:1200, beds:"1 queen size + 3 individuales", guests:5, img:"portada-master.png",
    desc:"Suite amplia de 45 m² con 1 cama queen size y 3 individuales. A/C, ventilador, sofá, WiFi de alta velocidad, TV pantalla plana con cable, radio/reloj/despertador. Baño completo con amenidades y secador de pelo. Cocina equipada con estufa eléctrica, refrigerador, microondas, cafetera con kit, mesa comedor/trabajo, vajilla y cubertería.", area:"45 m²" },
  { id:"exec-20", name:"Executive No.20", type:"Executive", price:950, beds:"1 cama queen size", guests:2, img:"portada-exec.png",
    desc:"Suite equipada con una cama queen size. Cocina integral con estufa, refrigerador, horno de microondas y cafetera con kit, vajilla y cubertería, equipo de planchado, mesa de comedor/trabajo, A/C, ventilador, TV con cable, WiFi y baño privado con toallas y amenidades." },
  { id:"exec-21", name:"Executive No.21", type:"Executive", price:950, beds:"1 cama king size", guests:2, img:"suite-executive.jpg",
    desc:"Suite equipada con una cama king size. Cocina integral con estufa, refrigerador, horno de microondas y cafetera con kit, vajilla y cubertería, equipo de planchado, mesa de comedor/trabajo, A/C, ventilador, TV con cable, WiFi y baño privado con toallas y amenidades." },
  { id:"exec-22", name:"Executive No.22", type:"Executive", price:950, beds:"1 cama king size", guests:2, img:"portada-exec.png",
    desc:"Suite equipada con una cama king size. Cocina integral con estufa, refrigerador, horno de microondas y cafetera con kit, vajilla y cubertería, equipo de planchado, mesa de comedor/trabajo, A/C, ventilador, TV con cable, WiFi y baño privado con toallas y amenidades." },
  { id:"jr-23", name:"Jr. Suite No.23", type:"Junior", price:1050, beds:"2 camas matrimoniales", guests:4, img:"suite-junior.jpg",
    desc:"Suite equipada con dos camas matrimoniales. Cocina integral con estufa, refrigerador, horno de microondas y cafetera con kit, vajilla y cubertería, equipo de planchado, mesa de comedor/trabajo, A/C, ventilador, TV con cable, WiFi y baño privado con toallas y amenidades." },
  { id:"jr-24", name:"Jr. Suite No.24", type:"Junior", price:1050, beds:"2 camas matrimoniales", guests:4, img:"portada-junior.png",
    desc:"Suite equipada con dos camas matrimoniales. Cocina integral con estufa, refrigerador, horno de microondas y cafetera con kit, vajilla y cubertería, equipo de planchado, mesa de comedor/trabajo, A/C, ventilador, TV con cable, WiFi y baño privado con toallas y amenidades." },
  { id:"jr-25", name:"Jr. Suite No.25", type:"Junior", price:1050, beds:"2 matrimoniales + 1 individual", guests:5, img:"room-detail-1.jpg",
    desc:"Suite equipada con 2 camas matrimoniales y una individual. Con refrigerador, horno de microondas y cafetera con kit, vajilla y cubertería, equipo de planchado, mesa de comedor/trabajo, A/C, ventilador, TV con cable, WiFi y baño privado con toallas y amenidades." }
];

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
    bath: '<svg viewBox="0 0 24 24"><path d="M4 12h16a1 1 0 0 1 1 1v3a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-3a1 1 0 0 1 1-1z"/><path d="M6 12V5a2 2 0 0 1 2-2h3v2.25"/></svg>'
  };

  container.innerHTML = filtered.map(r => `
    <article class="suite-card fade-up" id="${r.id}">
      <div class="suite-image">
        <img src="assets/images/${r.img}" alt="${r.name}" loading="lazy">
        <span class="suite-badge">Hasta ${r.guests} Personas</span>
      </div>
      <div class="suite-info">
        <h3>${r.name}</h3>
        <p class="suite-desc">${r.desc}</p>
        <div class="suite-amenities">
          <div class="suite-amenity">${icons.bed}<span>${r.beds}</span></div>
          <div class="suite-amenity">${icons.kitchen}<span>Cocina Equipada</span></div>
          <div class="suite-amenity">${icons.ac}<span>A/C y Ventilador</span></div>
          <div class="suite-amenity">${icons.wifi}<span>WiFi Gratis</span></div>
          <div class="suite-amenity">${icons.tv}<span>TV con Cable</span></div>
          <div class="suite-amenity">${icons.bath}<span>Baño Privado</span></div>
        </div>
        <div class="suite-pricing">
          <div><span class="price-label">Desde</span><div class="price">$${r.price.toLocaleString()} <span>MXN / noche</span></div></div>
          <a href="suite-${r.type.toLowerCase()}.html#${r.id}" class="btn btn-primary">Ver Detalles</a>
        </div>
      </div>
    </article>
  `).join('');
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

document.addEventListener('DOMContentLoaded', () => {
  window._roomObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); window._roomObserver.unobserve(e.target); } });
  }, { threshold: 0.1 });

  // Date inputs start as text, no auto-fill so placeholders show

  renderRooms('all', 0);

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

  // Also filter on guest change instantly
  const guestSel = document.getElementById('search-guests');
  if (guestSel) {
    guestSel.addEventListener('change', () => {
      renderRooms(getActiveFilter(), getSelectedGuests());
    });
  }
});
