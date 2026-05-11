const ROOMS = [
  { id:"master-10", name:"Master Studio No.10", type:"Master", price:1200, beds:"4 camas individuales", guests:4, img:"suite-master.jpg", desc:"Amplia studio con cocina integral, estufa, refrigerador, microondas, cafetera, vajilla y cubertería." },
  { id:"jr-11", name:"Jr. Studio No.11", type:"Junior", price:1050, beds:"2 camas matrimoniales", guests:3, img:"suite-junior.jpg", desc:"Studio equipado con cocina integral, estufa, refrigerador, microondas, cafetera, vajilla y cubertería." },
  { id:"jr-12", name:"Jr. Studio No.12", type:"Junior", price:1050, beds:"2 camas matrimoniales", guests:4, img:"room-detail-3.jpg", desc:"Studio equipado con cocina integral, estufa, refrigerador, microondas, cafetera, vajilla y cubertería." },
  { id:"jr-13", name:"Jr. Studio No.13", type:"Junior", price:1050, beds:"2 camas matrimoniales", guests:4, img:"room-detail-4.jpg", desc:"Studio equipado con cocina integral, estufa, refrigerador, microondas, cafetera, vajilla y cubertería." },
  { id:"jr-14", name:"Jr. Studio No.14", type:"Junior", price:1050, beds:"2 camas queen size", guests:4, img:"suite-junior.jpg", desc:"Studio equipado con cocina integral, estufa, refrigerador, microondas, cafetera, vajilla y cubertería." },
  { id:"jr-15", name:"Jr. Studio No.15", type:"Junior", price:1050, beds:"1 king size + 1 individual", guests:3, img:"room-detail-3.jpg", desc:"Studio equipado con cocina integral, estufa, refrigerador, microondas, cafetera, vajilla y cubertería." },
  { id:"jr-16", name:"Jr. Studio No.16", type:"Junior", price:1050, beds:"1 king size + 1 individual", guests:3, img:"room-detail-4.jpg", desc:"Studio equipado con cocina integral, estufa, refrigerador, microondas, cafetera, vajilla y cubertería." },
  { id:"exec-17", name:"Executive Studio No.17", type:"Executive", price:900, beds:"1 cama queen size", guests:2, img:"suite-executive.jpg", desc:"Studio con refrigerador, microondas, cafetera, vajilla y cubertería, mesa de comedor/trabajo." },
  { id:"master-18", name:"Master Studio No.18", type:"Master", price:1200, beds:"1 queen size + 3 individuales", guests:5, img:"suite-master.jpg", desc:"Studio amplio de 45 m² con cocina equipada, estufa eléctrica, refrigerador, microondas, cafetera, vajilla y cubertería.", area:"45 m²" },
  { id:"master-19", name:"Master Studio No.19", type:"Master", price:1200, beds:"1 queen size + 3 individuales", guests:5, img:"portada-master.png", desc:"Studio amplio de 45 m² con cocina equipada, estufa eléctrica, refrigerador, microondas, cafetera, vajilla y cubertería.", area:"45 m²" },
  { id:"exec-20", name:"Executive No.20", type:"Executive", price:950, beds:"1 cama queen size", guests:2, img:"portada-exec.png", desc:"Studio con cocina integral, estufa, refrigerador, microondas, cafetera, vajilla y cubertería, mesa de comedor/trabajo." },
  { id:"exec-21", name:"Executive No.21", type:"Executive", price:950, beds:"1 cama king size", guests:2, img:"suite-executive.jpg", desc:"Studio con cocina integral, estufa, refrigerador, microondas, cafetera, vajilla y cubertería, mesa de comedor/trabajo." },
  { id:"exec-22", name:"Executive No.22", type:"Executive", price:950, beds:"1 cama king size", guests:2, img:"portada-exec.png", desc:"Studio con cocina integral, estufa, refrigerador, microondas, cafetera, vajilla y cubertería, mesa de comedor/trabajo." },
  { id:"jr-23", name:"Jr. Studio No.23", type:"Junior", price:1050, beds:"2 camas matrimoniales", guests:4, img:"suite-junior.jpg", desc:"Studio con cocina integral, estufa, refrigerador, microondas, cafetera, vajilla y cubertería, mesa de comedor/trabajo." },
  { id:"jr-24", name:"Jr. Studio No.24", type:"Junior", price:1050, beds:"2 camas matrimoniales", guests:4, img:"portada-junior.png", desc:"Studio con cocina integral, estufa, refrigerador, microondas, cafetera, vajilla y cubertería, mesa de comedor/trabajo." },
  { id:"jr-25", name:"Jr. Studio No.25", type:"Junior", price:1050, beds:"2 matrimoniales + 1 individual", guests:5, img:"room-detail-1.jpg", desc:"Studio con refrigerador, microondas, cafetera, vajilla y cubertería, mesa de comedor/trabajo." }
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

  const bedIcon = '<svg viewBox="0 0 24 24"><path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/></svg>';
  const kitchenIcon = '<svg viewBox="0 0 24 24"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/></svg>';
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
          <div class="suite-amenity">${bedIcon}<span>${r.beds}</span></div>
          <div class="suite-amenity">${kitchenIcon}<span>Cocina Equipada</span></div>
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

  // Set default dates (today + tomorrow)
  const checkin = document.getElementById('search-checkin');
  const checkout = document.getElementById('search-checkout');
  if (checkin) {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    checkin.value = today.toISOString().split('T')[0];
    checkout.value = tomorrow.toISOString().split('T')[0];
    checkin.min = today.toISOString().split('T')[0];
  }

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
