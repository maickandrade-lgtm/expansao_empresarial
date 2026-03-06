// Theme Toggle
const html = document.documentElement, tb = document.getElementById('themeToggle');
tb.addEventListener('click', () => { html.setAttribute('data-theme', html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark') });

// Cursor Glow
const glow = document.getElementById('cursorGlow');
let mx = 0, my = 0, gx = 0, gy = 0;
if (window.matchMedia('(pointer:fine)').matches) { glow.classList.add('active'); document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY }); (function a() { gx += (mx - gx) * .12; gy += (my - gy) * .12; glow.style.left = gx + 'px'; glow.style.top = gy + 'px'; requestAnimationFrame(a) })() }

// FAQ Accordion
document.querySelectorAll('.faq-q').forEach(b => { b.addEventListener('click', () => { const i = b.parentElement, w = i.classList.contains('active'); document.querySelectorAll('.faq-i.active').forEach(x => x.classList.remove('active')); if (!w) i.classList.add('active') }) });

// Scroll Reveal
const ro = new IntersectionObserver(e => { e.forEach(x => { if (x.isIntersecting) { x.target.classList.add('vis'); ro.unobserve(x.target) } }) }, { threshold: .12 });
document.querySelectorAll('.rv').forEach(el => ro.observe(el));

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(a => { a.addEventListener('click', function (e) { e.preventDefault(); const t = document.querySelector(this.getAttribute('href')); if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' }) }) });
