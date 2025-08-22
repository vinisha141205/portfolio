document.getElementById('contact-btn').onclick=function() {
    document.getElementById('email').style.display ='block';
};
const themeToggle = document.getElementById('theme-toggle');
themeToggle.onclick = function() {
    document.body.classList.toggle('dark-mode');
    themeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
};
window.onload = function() {
    document.querySelectorAll('.progress').forEach(function(bar) {
        bar.style.width = bar.getAttribute('data-width');
    });
};