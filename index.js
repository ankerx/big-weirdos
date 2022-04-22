const btn = document.querySelector(".nav__menu");
const nav = document.querySelector(".nav__list");
const navLink = document.querySelectorAll(".nav__link");
const openMenu = document.querySelector(".fa-bars");
const closeMenu = document.querySelector(".fa-xmark");
const card = document.querySelectorAll(".roadmap__card");
const answerBox = document.querySelectorAll(".faq__answer");
const openBtn = document.querySelectorAll(".faq__btn");

btn.addEventListener("click", () => {
  nav.classList.toggle("active");
  closeMenu.classList.toggle("active");
  openMenu.classList.toggle("active");
  btn.classList.toggle("active");
});
navLink.forEach((link) =>
  link.addEventListener("click", () => {
    nav.classList.remove("active");
    closeMenu.classList.toggle("active");
    openMenu.classList.toggle("active");
    btn.classList.remove("active");
  })
);
openBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const question = e.currentTarget.parentElement.parentElement;
    question.classList.toggle("show");

    console.log(question);
  });
});

window.addEventListener("scroll", () => {
  const height = window.scrollY;

  if (height > 1100) {
    card.forEach((card) => card.classList.add("active"));
  }
});

//

var swiper = new Swiper(".mySwiper", {
  effect: "cards",
  speed: 250,
  paginationClickable: true,
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
});
