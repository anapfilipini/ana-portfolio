const btnMenu = document.querySelector(".menu-btn");
const links = document.querySelectorAll(".menu-nav a");

function toogleMenu() {
  const navMenu = document.querySelector(".menu-nav");
  navMenu.classList.toggle("active");
  btnMenu.classList.toggle("active");
  links.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
  function closeMenu() {
    navMenu.classList.remove("active");
    btnMenu.classList.remove("active");
  }
}

btnMenu.addEventListener("click", toogleMenu);

const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

function scrollToSection(event) {
  event.preventDefault();
  const href = event.currentTarget.getAttribute("href");
  const section = document.querySelector(href).offsetTop;

  window.scroll({
    top: section - 60,
    behavior: "smooth",
  });
}

linksInternos.forEach((link) => {
  link.addEventListener("click", scrollToSection);
});

const sections = document.querySelectorAll(".js-scroll");
const halfWindow = window.innerHeight * 0.6;

function animaScroll() {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const isSectionVisible = sectionTop - halfWindow;
    if (isSectionVisible < 0) {
      section.classList.add("ativo");
    } else {
      section.classList.remove("ativo");
    }
  });
}

animaScroll();

window.addEventListener("scroll", animaScroll);
