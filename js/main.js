// Theme toggle
const btn = document.getElementById("toggleBtn");
btn.addEventListener("click", () => {
  const body = document.body;
  if(body.classList.contains("luxury")) {
    body.classList.remove("luxury");
    body.classList.add("hyper");
    btn.textContent = "Switch to Luxury";
  } else {
    body.classList.remove("hyper");
    body.classList.add("luxury");
    btn.textContent = "Switch to Hyper-Beast";
  }
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Contact form validation
const form = document.getElementById("contactForm");
if(form){
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    form.reset();
  });
}
// Apply saved theme on page load
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  const body = document.body;
  const btn = document.getElementById("toggleBtn");

  if (savedTheme === "hyper") {
    body.classList.remove("luxury");
    body.classList.add("hyper");
    btn.textContent = "Switch to Luxury";
  } else {
    body.classList.remove("hyper");
    body.classList.add("luxury");
    btn.textContent = "Switch to Hyper-Beast";
  }
});

// Theme toggle with persistence
const btn = document.getElementById("toggleBtn");
btn.addEventListener("click", () => {
  const body = document.body;
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

// Contact form validation
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    form.reset();
  });
}
