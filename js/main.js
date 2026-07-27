/* =============================================
   APARTHOTEL SIETE32 — Main JavaScript
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* --- Mobile Menu Toggle --- */
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('open');
      document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });

    // Close on link click
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* --- Date Input: Click anywhere to open calendar --- */
  document.querySelectorAll('.booking-field input[type="date"]').forEach(input => {
    // Make the entire input clickable to trigger the date picker
    input.addEventListener('click', function () {
      // showPicker() is supported on modern browsers (Chrome, Edge, Safari 16+)
      if (typeof this.showPicker === 'function') {
        try { this.showPicker(); } catch (e) { /* silently fail on unsupported browsers */ }
      }
    });
  });

  /* --- Scroll-Triggered Animations (AOS-style) --- */
  const observerOptions = { threshold: 0.15, rootMargin: '0px 0px -40px 0px' };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-up, .stagger').forEach(el => observer.observe(el));

  /* --- Header Background on Scroll --- */
  const header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 60) {
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,.15)';
      } else {
        header.style.boxShadow = 'none';
      }
    });
  }

  /* --- Smooth scroll for anchor links --- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* --- Little Hotelier Booking Widget Bridge --- */
  const bookingForm = document.querySelector('.booking-widget');
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const checkin = document.getElementById('checkin')?.value || '';
      const checkout = document.getElementById('checkout')?.value || '';
      const guests = document.getElementById('guests')?.value || '2';

      // Redirect to Little Hotelier booking page with pre-filled dates
      const bookingUrl = `https://direct-book.com/properties/aparthotelsiete32direct?check_in=${checkin}&check_out=${checkout}&number_of_guests=${guests}`;
      window.open(bookingUrl, '_blank');
    });
  }

  /* --- Contact Form → WhatsApp ---
     El mensaje se arma con los datos del formulario y se abre el
     WhatsApp del hotel con el texto prellenado. Sin servicios externos:
     los mensajes llegan al mismo número que ya atiende recepción. --- */
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    const isEn = (document.documentElement.lang || 'es').toLowerCase().indexOf('en') === 0;
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const val = (id) => {
        const el = document.getElementById(id);
        return el ? el.value.trim() : '';
      };
      let text = (isEn ? 'Hello, my name is ' : 'Hola, soy ') + val('name') + '.\n';
      if (val('phone')) text += (isEn ? 'Phone: ' : 'Teléfono: ') + val('phone') + '\n';
      if (val('email')) text += (isEn ? 'Email: ' : 'Correo: ') + val('email') + '\n';
      text += '\n' + val('message');

      window.open('https://wa.me/529992551748?text=' + encodeURIComponent(text), '_blank', 'noopener');

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = isEn ? '✓ Opening WhatsApp…' : '✓ Abriendo WhatsApp…';
      setTimeout(() => { submitBtn.textContent = originalText; }, 4000);
    });
  }

});
