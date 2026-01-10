// Reveal animations
const observer = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  }
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Mobile nav toggle
const toggleBtn = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');
toggleBtn.addEventListener('click', () => navLinks.classList.toggle('active'));

// Update footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Parallax scroll effect
window.addEventListener("scroll", () => {
  document.querySelectorAll("[data-parallax]").forEach(section => {
    let offset = window.pageYOffset;
    // adjust 0.5 for speed (0.2 = slower, 0.8 = faster)
    section.style.backgroundPositionY = offset * 0.5 + "px";
  });
});
