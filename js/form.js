// ===============================
// Supercar Studio - Form Script
// Handles contact form validation, feedback, automation
// ===============================

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (!form) return;

  // -------------------------------
  // Real-time validation
  // -------------------------------
  const nameInput = form.querySelector('input[type="text"]');
  const emailInput = form.querySelector('input[type="email"]');
  const messageInput = form.querySelector("textarea");

  [nameInput, emailInput, messageInput].forEach(input => {
    input.addEventListener("input", () => {
      if (input.value.trim() !== "") {
        input.style.borderColor = "green";
      } else {
        input.style.borderColor = "red";
      }
    });
  });

  // -------------------------------
  // Submit handler
  // -------------------------------
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
    if (!email.match(emailPattern)) {
      alert("Please enter a valid email address.");
      return;
    }

    // -------------------------------
    // Success feedback
    // -------------------------------
    alert("Message sent successfully!");
    form.reset();

    // -------------------------------
    // Optional: send to Zapier/Make API
    // -------------------------------
    // fetch("https://hooks.zapier.com/hooks/catch/xxxxxx", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ name, email, message })
    // })
    // .then(res => res.json())
    // .then(data => console.log("Sent to automation:", data))
    // .catch(err => console.error("Error:", err));
  });

  // -------------------------------
  // UX: animate button on click
  // -------------------------------
  const submitBtn = form.querySelector("button");
  if (submitBtn) {
    submitBtn.addEventListener("click", () => {
      submitBtn.style.transform = "scale(0.95)";
      setTimeout(() => {
        submitBtn.style.transform = "scale(1)";
      }, 200);
    });
  }
});
