// Mobile menu
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', open);
    menuBtn.textContent = open ? 'Close' : 'Menu';
  });
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
    menuBtn.textContent = 'Menu';
  }));
}

// Scroll reveal
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Contact form (placeholder until a form service is connected)
const form = document.getElementById('contactForm');
if (form && !form.getAttribute('action')) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.querySelector('.form-note').textContent =
      'Thanks! Your message is ready — connect a form service (e.g. Formspree) to receive it by email.';
  });
}
