// ===============================
// Supercar Studio - Main Script
// Handles theme toggle, persistence, animations, navigation
// ===============================

document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const btn = document.getElementById("toggleBtn");

  // -------------------------------
  // Apply saved theme on page load
  // -------------------------------
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "hyper") {
    setHyperTheme(body, btn);
  } else {
    setLuxuryTheme(body, btn);
  }

  // -------------------------------
  // Theme toggle button
  // -------------------------------
  if (btn) {
    btn.addEventListener("click", () => {
      if (body.classList.contains("luxury")) {
        setHyperTheme(body, btn);
        localStorage.setItem("theme", "hyper");
      } else {
        setLuxuryTheme(body, btn);
        localStorage.setItem("theme", "luxury");
      }
    });
  }

  // -------------------------------
  // Smooth scroll for internal links
  // -------------------------------
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });

  // -------------------------------
  // Fade-in effect on page load
  // -------------------------------
  body.style.opacity = 0;
  setTimeout(() => {
    body.style.transition = "opacity 1s ease-in-out";
    body.style.opacity = 1;
  }, 100);

  // -------------------------------
  // Navbar scroll effect
  // -------------------------------
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // -------------------------------
  // Feature card hover animations
  // -------------------------------
  const features = document.querySelectorAll(".feature");
  features.forEach(feature => {
    feature.addEventListener("mouseenter", () => {
      feature.style.transform = "translateY(-10px) scale(1.05)";
      feature.style.transition = "all 0.3s ease";
    });
    feature.addEventListener("mouseleave", () => {
      feature.style.transform = "translateY(0) scale(1)";
    });
  });

  // -------------------------------
  // Hero text animation
  // -------------------------------
  const heroTitle = document.querySelector(".hero-content h1");
  if (heroTitle) {
    heroTitle.style.opacity = 0;
    heroTitle.style.transform = "translateY(30px)";
    setTimeout(() => {
      heroTitle.style.transition = "all 1s ease";
      heroTitle.style.opacity = 1;
      heroTitle.style.transform = "translateY(0)";
    }, 500);
  }

  // -------------------------------
  // CTA button pulse animation
  // -------------------------------
  const ctaBtn = document.querySelector(".cta-btn");
  if (ctaBtn) {
    setInterval(() => {
      ctaBtn.classList.add("pulse");
      setTimeout(() => ctaBtn.classList.remove("pulse"), 1000);
    }, 4000);
  }
});

// -------------------------------
// Helper functions
// -------------------------------
function setHyperTheme(body, btn) {
  body.classList.remove("luxury");
  body.classList.add("hyper");
  if (btn) btn.textContent = "Switch to Luxury";
}

function setLuxuryTheme(body, btn) {
  body.classList.remove("hyper");
  body.classList.add("luxury");
  if (btn) btn.textContent = "Switch to Hyper-Beast";
}
