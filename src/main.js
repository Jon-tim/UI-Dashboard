const profile = document.querySelector(".profile-pic");
const profileInfo = document.querySelector(".profile__dropdown");
const arrow = document.querySelector(".arrow");
const dots = document.querySelectorAll(".btn-dots");
const navIcons = document.querySelectorAll(".nav-item");
const navToggler = document.querySelector(".nav-toggler");
const nav = document.querySelector("nav");
const navItemName = document.querySelectorAll(".nav-item span");
const settingsName = document.querySelectorAll(".settings span");

function show(app, arr) {
  app.classList.toggle("hide");
  arr.classList.toggle("bx-chevron-up");
}

function openInfo() {
  closeInfo(this);
  this.parentElement.parentElement.lastElementChild.classList.toggle("hide");
}
function closeInfo(infoOne) {
  dots.forEach((infoTwo) => {
    if (infoTwo != infoOne) {
      infoTwo.parentElement.parentElement.lastElementChild.classList.add(
        "hide"
      );
    }
  });
}

dots.forEach((i) => i.addEventListener("click", openInfo));

function activeNavIcon() {
  nonActive(this);
  this.classList.add("active");
}

function nonActive(arg) {
  navIcons.forEach(function (i) {
    if (arg != i) {
      i.classList.remove("active");
    }
  });
}

navIcons.forEach((i) => i.addEventListener("click", activeNavIcon));

function openNav() {
  settingsName.forEach((i) => i.classList.toggle("hide__navlist__names"));
  navItemName.forEach((i) => i.classList.toggle("hide__navlist__names"));
  nav.classList.toggle("nav-open");
}
navToggler.addEventListener("click", openNav);
