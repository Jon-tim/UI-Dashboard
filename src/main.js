const profile = document.querySelector(".profile-pic");
const profileInfo = document.querySelector(".profile__dropdown");
const arrow = document.querySelector(".arrow");
const dots = document.querySelectorAll(".btn-dots");

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
