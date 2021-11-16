// Getting menu icon element
const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".desktop-menu");
const closeToggle = document.querySelector("close-toggle");

menu.addEventListener("click", () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
  closeToggle.classList.toggle("active");
});

// Getting the bars of the hamburger menu
const portfolio = document.querySelector(".portfolio-link");
const aboutUs = document.querySelector(".about-link");
const contactLink = document.querySelector(".contact-link");

const closeMobileMenu = () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
};

portfolio.addEventListener("click", () => {
  closeMobileMenu();
});

aboutUs.addEventListener("click", () => {
  closeMobileMenu();
});

contactLink.addEventListener("click", () => {
  closeMobileMenu();
});
