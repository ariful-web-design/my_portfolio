document.addEventListener("DOMContentLoaded", () => {
  const skillBars = document.querySelectorAll(".skill-bar");
  skillBars.forEach(bar => {
    const percent = bar.getAttribute("data-percent");
    setTimeout(() => {
      bar.style.width = percent;
    }, 300); // small delay for effect
  });
});
