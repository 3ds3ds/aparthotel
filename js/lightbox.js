/* =============================================
   APARTHOTEL SIETE32 — Photo lightbox
   ---------------------------------------------
   On the studio detail page, clicking the hero image or any photo in
   "Galería de Fotos" opens a full-screen viewer. Navigate with the
   on-screen arrows, the keyboard (← → Esc), or by swiping on touch.
   No-ops on pages without a #studio-gallery.
   ============================================= */
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    var figures = Array.prototype.slice.call(document.querySelectorAll("#studio-gallery figure"));
    if (!figures.length) return; // not a detail page

    var items = figures.map(function (fig) {
      var img = fig.querySelector("img");
      var cap = fig.querySelector("figcaption");
      return { src: img ? img.getAttribute("src") : "", caption: cap ? cap.textContent : "" };
    }).filter(function (it) { return it.src; });
    if (!items.length) return;

    /* --- Build the overlay once --- */
    var isEn = (document.documentElement.lang || "es").toLowerCase().indexOf("en") === 0;
    var lb = document.createElement("div");
    lb.className = "lightbox";
    lb.setAttribute("role", "dialog");
    lb.setAttribute("aria-label", isEn ? "Photo gallery" : "Galería de fotos");
    lb.innerHTML =
      '<span class="lightbox-counter"></span>' +
      '<button class="lightbox-close" type="button" aria-label="' + (isEn ? 'Close' : 'Cerrar') + '">&times;</button>' +
      '<button class="lightbox-nav lightbox-prev" type="button" aria-label="' + (isEn ? 'Previous photo' : 'Foto anterior') + '">&#10094;</button>' +
      '<img class="lightbox-img" alt="">' +
      '<button class="lightbox-nav lightbox-next" type="button" aria-label="' + (isEn ? 'Next photo' : 'Foto siguiente') + '">&#10095;</button>' +
      '<div class="lightbox-caption"></div>';
    document.body.appendChild(lb);

    var imgEl = lb.querySelector(".lightbox-img");
    var capEl = lb.querySelector(".lightbox-caption");
    var counterEl = lb.querySelector(".lightbox-counter");
    var prevBtn = lb.querySelector(".lightbox-prev");
    var nextBtn = lb.querySelector(".lightbox-next");

    if (items.length <= 1) {
      prevBtn.style.display = "none";
      nextBtn.style.display = "none";
      counterEl.style.display = "none";
    }

    var cur = 0;

    function show(i) {
      cur = (i + items.length) % items.length;
      imgEl.src = items[cur].src;
      imgEl.alt = items[cur].caption;
      capEl.textContent = items[cur].caption;
      counterEl.textContent = (cur + 1) + " / " + items.length;
    }
    function open(i) { show(i); lb.classList.add("open"); document.body.style.overflow = "hidden"; }
    function close() { lb.classList.remove("open"); document.body.style.overflow = ""; }
    function next() { show(cur + 1); }
    function prev() { show(cur - 1); }

    lb.querySelector(".lightbox-close").addEventListener("click", close);
    nextBtn.addEventListener("click", function (e) { e.stopPropagation(); next(); });
    prevBtn.addEventListener("click", function (e) { e.stopPropagation(); prev(); });
    // Click the dark backdrop (but not the image/buttons) to close.
    lb.addEventListener("click", function (e) { if (e.target === lb) close(); });

    document.addEventListener("keydown", function (e) {
      if (!lb.classList.contains("open")) return;
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    });

    /* --- Swipe on touch --- */
    var startX = null;
    lb.addEventListener("touchstart", function (e) { startX = e.changedTouches[0].clientX; }, { passive: true });
    lb.addEventListener("touchend", function (e) {
      if (startX === null) return;
      var dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 40) { if (dx < 0) next(); else prev(); }
      startX = null;
    }, { passive: true });

    /* --- Triggers --- */
    figures.forEach(function (fig, i) {
      fig.style.cursor = "zoom-in";
      fig.addEventListener("click", function () { open(i); });
    });

    var hero = document.getElementById("detail-hero");
    if (hero) {
      hero.style.cursor = "zoom-in";
      hero.addEventListener("click", function () {
        // Start on the hero's own photo if it's part of the gallery.
        var bg = getComputedStyle(hero).backgroundImage || "";
        var m = bg.match(/([^/"')]+\.(?:jpg|jpeg|png|webp))/i);
        var file = m ? m[1] : "";
        var idx = 0;
        for (var k = 0; k < items.length; k++) {
          if (file && items[k].src.indexOf(file) !== -1) { idx = k; break; }
        }
        open(idx);
      });
    }
  });
})();
