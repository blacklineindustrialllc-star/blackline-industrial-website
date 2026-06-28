document.addEventListener("DOMContentLoaded", () => {
  const revealItems = document.querySelectorAll(".card, .split, .cta, .contact-grid, form");

  revealItems.forEach((item) => item.classList.add("reveal"));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item) => observer.observe(item));
});
