// Mobile menu toggle + active link highlight
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.menu-btn');
  const mobileNav = document.querySelector('.mobile-nav');
  const iconOpen = document.querySelector('.menu-btn .i-open');
  const iconClose = document.querySelector('.menu-btn .i-close');

  if (btn && mobileNav) {
    btn.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('open');
      if (iconOpen && iconClose) {
        iconOpen.style.display = isOpen ? 'none' : 'block';
        iconClose.style.display = isOpen ? 'block' : 'none';
      }
    });
  }

  // Active link
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('[data-nav]').forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });

  // Year in footer
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
});
