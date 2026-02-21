document.addEventListener("DOMContentLoaded", () => {
  // Reveal animations on scroll
  const reveals = document.querySelectorAll(".reveal");

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const revealPoint = 150;

    reveals.forEach((reveal) => {
      const revealTop = reveal.getBoundingClientRect().top;

      if (revealTop < windowHeight - revealPoint) {
        reveal.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Initial check

  // Header scroll background
  const header = document.querySelector(".glass-header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.style.background = "rgba(10, 10, 10, 0.95)";
      header.style.padding = "5px 0";
    } else {
      header.style.background = "rgba(20, 20, 20, 0.7)";
      header.style.padding = "0";
    }
  });
});
