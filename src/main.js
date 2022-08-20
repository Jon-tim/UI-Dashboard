const profile = document.querySelector(".profile-pic");
const profileInfo = document.querySelector(".profile__dropdown");
const arrow = document.querySelector(".arrow");

function show(app, arr) {
  app.classList.toggle("hide");
  arr.classList.toggle("bx-chevron-up");
}
