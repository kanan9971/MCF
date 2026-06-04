/* MC Fintech Solutions Ltd — Main JS */

(function () {
  'use strict';

  /* ===== NAV COLOR SWITCHING ===== */
  const nav = document.querySelector('.site-nav');

  function updateNav() {
    if (!nav) return;
    const hero = document.querySelector('.hero, .page-hero');
    if (!hero) {
      nav.classList.add('nav-light');
      nav.classList.remove('nav-dark');
      return;
    }
    const rect = hero.getBoundingClientRect();
    const overHero = rect.bottom > 70;
    nav.classList.toggle('nav-light', !overHero);
    nav.classList.toggle('nav-dark', overHero);
  }

  updateNav();
  window.addEventListener('scroll', updateNav, { passive: true });

  /* ===== MOBILE MENU ===== */
  const hamburger = document.querySelector('.nav-hamburger');
  const drawer = document.querySelector('.nav-drawer');

  if (hamburger && drawer) {
    hamburger.addEventListener('click', function () {
      const isOpen = drawer.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close on link click
    drawer.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        drawer.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  /* ===== FADE-UP ANIMATIONS ===== */
  const fadeElements = document.querySelectorAll('.fade-up');

  if (fadeElements.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    fadeElements.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback: show all without animation
    fadeElements.forEach(function (el) {
      el.classList.add('visible');
    });
  }

  /* ===== HERO EXPLORE SCROLL ===== */
  const exploreCta = document.querySelector('.hero-cta[href="#explore"]');
  if (exploreCta) {
    exploreCta.addEventListener('click', function (e) {
      e.preventDefault();
      const next = document.querySelector('.hero + section, .hero + *');
      if (next) {
        next.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  /* ===== ACTIVE NAV LINK ===== */
  const currentPath = window.location.pathname.replace(/\/$/, '') || '/';
  document.querySelectorAll('.nav-menu a, .nav-drawer a').forEach(function (link) {
    const href = link.getAttribute('href') || '';
    const linkPath = href.replace(/\/$/, '') || '/';
    if (
      (currentPath === '/' && linkPath === '/') ||
      (linkPath !== '/' && currentPath.startsWith(linkPath))
    ) {
      link.style.color = 'var(--accent)';
    }
  });
})();
