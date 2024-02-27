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

(function () {
  const links = document.querySelectorAll(".hover-this");
  const cursors = document.querySelectorAll(".cursor");

  const animateIt = function (e) {
    const span = this.querySelector(".hover-animation");
    const { offsetX: x, offsetY: y } = e,
      { offsetWidth: width, offsetHeight: height } = this,
      move = 25,
      xMove = (x / width) * (move * 2) - move,
      yMove = (y / height) * (move * 2) - move;

    span.style.transform = `translate(${xMove}px, ${yMove}px)`;

    if (e.type === "mouseleave") span.style.transform = "";
  };

  const editCursors = (e) => {
    const { clientX: x, clientY: y } = e;
    cursors.forEach((cursor) => {
      cursor.style.left = x + "px";
      cursor.style.top = y + "px";
    });
  };

  links.forEach((link) => {
    link.addEventListener("mousemove", animateIt);
    link.addEventListener("mouseleave", animateIt);
  });
  window.addEventListener("mousemove", editCursors);
})();

let sections = document.querySelectorAll("section");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;

    if (top >= offset && top < offset + height) {
      sec.classList.add("show-animate");
    } else {
      sec.classList.remove("show-animate");
    }
  });
};
