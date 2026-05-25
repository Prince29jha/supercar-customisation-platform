// Apply saved theme on page load
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  const body = document.body;
  const btn = document.getElementById("toggleBtn");

  if (savedTheme === "hyper") {
    body.classList.add("hyper");
    body.classList.remove("luxury");
    if (btn) btn.textContent = "Switch to Luxury";
  } else {
    body.classList.add("luxury");
    body.classList.remove("hyper");
    if (btn) btn.textContent = "Switch to Hyper-Beast";
  }

  // Attach toggle listener
  if (btn) {
    btn.addEventListener("click", () => {
      if (body.classList.contains("luxury")) {
        body.classList.remove("luxury");
        body.classList.add("hyper");
        btn.textContent = "Switch to Luxury";
        localStorage.setItem("theme", "hyper");
      } else {
        body.classList.remove("hyper");
        body.classList.add("luxury");
        btn.textContent = "Switch to Hyper-Beast";
        localStorage.setItem("theme", "luxury");
      }
    });
  }
});
