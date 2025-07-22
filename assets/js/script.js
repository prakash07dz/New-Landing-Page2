// Toggle Mobile Menu
const toggleBtn = document.getElementById("mobileToggle");
const navMenu = document.getElementById("navMenu");

toggleBtn.addEventListener("click", () => {
  navMenu.classList.toggle("open");
  toggleBtn.classList.toggle("open");
});

// Toggle Language Dropdown
function toggleDropdown() {
  const dropdown = document.getElementById("lang-dropdown");
  const isVisible = dropdown.style.display === "block";
  dropdown.style.display = isVisible ? "none" : "block";
}

// Close dropdown if clicked outside
document.addEventListener("click", function (event) {
  const button = document.querySelector(".lang-btn");
  const dropdown = document.getElementById("lang-dropdown");

  if (!button.contains(event.target) && !dropdown.contains(event.target)) {
    dropdown.style.display = "none";
  }
});

//Mouse move animation
document.addEventListener("mousemove", (e) => {
  const heart = document.getElementById("heart-decor");
  const x = (e.clientX / window.innerWidth - 0.5) * 20; // adjust strength
  const y = (e.clientY / window.innerHeight - 0.5) * 20;
  heart.style.transform = `translate(${x}px, ${y}px)`;
});

document.addEventListener("mousemove", (e) => {
  const leftIcon = document.querySelector(".hero-icon.left");
  const rightIcon = document.querySelector(".hero-icon.right");

  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;

  leftIcon.style.transform = `translate(${x}px, ${y}px)`;
  rightIcon.style.transform = `translate(${-x}px, ${-y}px)`;
});

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  {
    threshold: 0.1,
  }
);

reveals.forEach((el) => {
  observer.observe(el);
});
