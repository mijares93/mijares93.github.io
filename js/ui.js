/* ==========================================
   UI Interactions
   ========================================== */

// Toast notification
const toast = document.getElementById("toast");
const toastText = document.getElementById("toastText");
let toastTimer = null;

function showToast(msg) {
  toastText.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2000);
}

// Copy email to clipboard
document.getElementById("copyEmail").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(EMAIL);
    showToast("✓ Email copied to clipboard");
  } catch (e) {
    showToast("❌ Copy failed");
  }
});

// Reveal on scroll
const revealEls = document.querySelectorAll(".reveal");
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in");
      revealObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealEls.forEach(el => revealObs.observe(el));
