// Toggle mobile navigation menu
const toggleButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

toggleButton.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("form-status");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json"
        }
      });

      if (response.ok) {
        status.textContent = "Thanks! Your message has been sent.";
        status.style.color = "green";
        form.reset();
      } else {
        status.textContent = "Oops! There was a problem. Please try again.";
        status.style.color = "red";
      }
    } catch (error) {
      status.textContent = "Network error. Please try again.";
      status.style.color = "red";
    }
  });
});