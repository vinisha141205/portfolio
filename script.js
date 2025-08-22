// Optional: Add any JS interactions, e.g., highlight nav item on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 80;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach((link) => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});
document.getElementById('contact-btn').onclick = function() {
  document.getElementById('email').style.display = 'block';
};
window.onload = function() {
  document.querySelectorAll('.progress').forEach(function(bar) {
    bar.style.width = bar.getAttribute('data-width');
  });
};
