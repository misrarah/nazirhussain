/* ═══════════════════════════════════════════════════
   Nazir Hussain — Private Taxi Tours, Leh, Ladakh
   script.js
   ═══════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ── Nav: scroll state ──────────────────────────── */
  const nav = document.getElementById('nav');

  function updateNav() {
    if (window.scrollY > 60) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();

  /* ── Nav: hamburger menu ────────────────────────── */
  const hamburger = document.getElementById('nav-hamburger');
  const navMenu   = document.getElementById('nav-menu');

  hamburger.addEventListener('click', function () {
    const isOpen = navMenu.classList.toggle('open');
    hamburger.classList.toggle('active', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  /* Close mobile menu when a nav link is clicked */
  navMenu.querySelectorAll('.nav-link').forEach(function (link) {
    link.addEventListener('click', function () {
      navMenu.classList.remove('open');
      hamburger.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  /* ── Intersection Observer: scroll fade-ins ─────── */
  const fadeEls = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  /* Stagger siblings within the same parent container */
  const groups = new Map();
  fadeEls.forEach(function (el) {
    const parent = el.parentElement;
    if (!groups.has(parent)) groups.set(parent, []);
    groups.get(parent).push(el);
  });

  groups.forEach(function (siblings) {
    siblings.forEach(function (el, i) {
      el.style.transitionDelay = (i * 0.08) + 's';
      observer.observe(el);
    });
  });

  /* ── Gallery lightbox (pure JS) ─────────────────── */
  const lightbox    = document.getElementById('lightbox');
  const lbImg       = document.getElementById('lightbox-img');
  const lbCaption   = document.getElementById('lightbox-caption');
  const lbClose     = document.getElementById('lightbox-close');
  let previouslyFocused = null;

  function openLightbox(src, alt, caption) {
    lbImg.src     = src;
    lbImg.alt     = alt || '';
    lbCaption.textContent = caption || '';
    lightbox.classList.add('active');
    lightbox.setAttribute('aria-hidden', 'false');
    previouslyFocused = document.activeElement;
    lbClose.focus();
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    lightbox.setAttribute('aria-hidden', 'true');
    lbImg.src = '';
    document.body.style.overflow = '';
    if (previouslyFocused) previouslyFocused.focus();
  }

  /* Attach click handlers to gallery items */
  document.querySelectorAll('.gallery-item').forEach(function (item) {
    const img     = item.querySelector('.gallery-img');
    const caption = item.querySelector('figcaption');

    function handleActivate() {
      const src      = img ? img.src : '';
      const alt      = img ? img.alt : '';
      const capText  = caption ? caption.textContent : '';
      openLightbox(src, alt, capText);
    }

    item.addEventListener('click', handleActivate);
    item.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleActivate();
      }
    });
  });

  lbClose.addEventListener('click', closeLightbox);

  /* Click outside the image to close */
  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) closeLightbox();
  });

  /* Keyboard: Escape */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
      closeLightbox();
    }
  });

  /* ── Footer: dynamic copyright year ─────────────── */
  const yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ── Email obfuscation ───────────────────────────── */
  /* The full email address is never present in the HTML source.
     It is assembled here at runtime from separate parts. */
  (function () {
    const el = document.getElementById('designer-email');
    if (!el) return;
    const u = 'rahulmisra204';
    const d = 'gmail.com';
    el.textContent = u + ' [at] gmail [dot] com';
    el.setAttribute('href', 'mail' + 'to:' + u + '\x40' + d);
  }());

}());
