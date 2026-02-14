/* ==========================================
   Scroll Interactions
   ========================================== */

// Scroll progress bar
const progressFill = document.getElementById("progressFill");

window.addEventListener("scroll", () => {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  progressFill.style.width = scrolled + "%";
});

// Scroll spy (active nav)
const navLinks = document.querySelectorAll(".navlinks a[data-link]");
const sections = ["about", "skills", "experience", "contact"].map(id => document.getElementById(id));

function setActive(id) {
  navLinks.forEach(a => a.classList.toggle("active", a.dataset.link === id));
}

const spy = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      setActive(entry.target.id);
    }
  });
}, { threshold: 0.35 });

sections.forEach(sec => spy.observe(sec));

// Smooth scroll with offset
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    
    if (target) {
      const offset = 80;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});
