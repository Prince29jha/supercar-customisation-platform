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

// Contact form validation
const form = document.getElementById("contactForm");
if(form){
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    form.reset();
  });
}
