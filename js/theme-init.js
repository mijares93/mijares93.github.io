/* ==========================================
   Theme Initialization
   Runs BEFORE CSS paint to prevent flash
   ========================================== */

(function() {
  try {
    const saved = localStorage.getItem("theme");
    const theme = saved || "dark";
    
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  } catch (e) {
    // localStorage not available, default to dark
    document.documentElement.setAttribute("data-theme", "dark");
  }
})();
