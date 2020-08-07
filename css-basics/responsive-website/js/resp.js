burger = document.querySelector(".burger");
navList = document.querySelector(".nav-list");
rightNav = document.querySelector(".rightNav");
navbar = document.querySelector(".navbar");

burger.addEventListener("click", () => {
  navList.classList.toggle("v-class-resp");
  rightNav.classList.toggle("v-class-resp");
  navbar.classList.toggle("h-nav-resp");
});
