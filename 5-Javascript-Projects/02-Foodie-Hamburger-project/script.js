const hamburgerIcon = document.querySelector(".hamburger-icon");
const closeIcon = document.querySelector(".close-menu");
const headerContent = document.querySelector(".header-content");
const navBar = document.querySelector(".nav");

hamburgerIcon.addEventListener("click", (e) => {
  e.stopPropagation(); // to prevent event bubbling oto window
  headerContent.classList.add("nav-open");
});

navBar.addEventListener("click", (e) => {
  e.stopPropagation();
});

closeIcon.addEventListener("click", () => {
  headerContent.classList.remove("nav-open");
});

window.addEventListener("click", () => {
  headerContent.classList.remove("nav-open");
});

// ----------------------------

const logo = document.querySelector(".logo");
const goToTopBtn = document.querySelector(".go-to-top");
const main = document.querySelector("main");

logo.addEventListener("click", () => {
  main.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

goToTopBtn.addEventListener("click", () => {
  main.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
