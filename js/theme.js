/* ==========================================
   Theme Toggle
   ========================================== */

const root = document.documentElement;
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  const isDark = root.getAttribute("data-theme") === "dark";
  const next = isDark ? "light" : "dark";
  
  if (next === "dark") {
    root.setAttribute("data-theme", "dark");
  } else {
    root.removeAttribute("data-theme");
  }
  
  try {
    localStorage.setItem("theme", next);
  } catch (e) {
    // localStorage not available
    console.warn("Could not save theme preference");
  }
});
