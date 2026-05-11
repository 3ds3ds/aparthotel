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
      const bookingUrl = `https://app.littlehotelier.com/properties/aparthotelsiete32direct?check_in=${checkin}&check_out=${checkout}&number_of_guests=${guests}`;
      window.open(bookingUrl, '_blank');
    });
  }

  /* --- Contact Form (Formspree placeholder) --- */
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const formData = new FormData(contactForm);
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Enviando...';
      submitBtn.disabled = true;

      try {
        // Replace YOUR_FORM_ID with actual Formspree endpoint
        const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
          method: 'POST',
          body: formData,
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          submitBtn.textContent = '✓ Enviado';
          contactForm.reset();
          setTimeout(() => { submitBtn.textContent = originalText; submitBtn.disabled = false; }, 3000);
        } else {
          throw new Error('Error');
        }
      } catch (err) {
        submitBtn.textContent = 'Error — Intenta de nuevo';
        submitBtn.disabled = false;
        setTimeout(() => { submitBtn.textContent = originalText; }, 3000);
      }
    });
  }

});
