// Scroll reveal animation
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach((el, index) => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      setTimeout(() => {
        el.classList.add("active");
      }, index * 120);
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// Skill bar animation
const bars = document.querySelectorAll(".bar span");

function animateSkills() {
  bars.forEach(bar => {
    if (
      bar.getBoundingClientRect().top < window.innerHeight - 50 &&
      !bar.classList.contains("filled")
    ) {
      bar.classList.add("filled");
      bar.style.width = bar.dataset.width;
    }
  });
}

window.addEventListener("scroll", animateSkills);

// Cursor glow follow
const glow = document.querySelector(".cursor-glow");
document.addEventListener("mousemove", e => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});