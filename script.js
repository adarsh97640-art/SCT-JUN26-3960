const navbar = document.getElementById("navbar");
const scrollThreshold = 60;

function updateNavbarState() {
  if (window.scrollY > scrollThreshold) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
}

document.addEventListener("scroll", updateNavbarState, { passive: true });
window.addEventListener("load", updateNavbarState);
