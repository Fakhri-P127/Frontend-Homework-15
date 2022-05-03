//scroll event variable
const navLinks = document.querySelectorAll("a");
// click event variables
const idScroll = document.querySelector("#scroll-down");
const btnBar = document.querySelector("#btnBar");
const hiddenDiv = document.querySelector("#hiddenDiv");
const btnClose = document.querySelector("#btnClose");

//Scroll events start
window.onscroll = function scrollFunction() {
  if (window.scrollY > 100) {
    document.querySelector("header").style.backgroundColor = "white";
    document.querySelector("header").classList.add("lessen-height");
    navLinks.forEach((x) => (x.style.color = "black"));
    document.querySelector("#btnBar>i").style.color = "#2D3192";
  } else if (window.scrollY < 100) {
    document.querySelector("header").style.backgroundColor = "transparent";
    document.querySelector("header").classList.remove("lessen-height");
    navLinks.forEach((x) => (x.style.color = "#f4f4f4"));
    document.querySelector("#btnBar>i").style.color = "white";
  }
};

idScroll.addEventListener("click", function () {
  window.scrollTo(0, 800);
});
//Scroll events end

//Click events start
btnBar.addEventListener("click", function () {
  document.querySelector("nav").classList.add("btnAll");
  hiddenDiv.classList.remove("hidden--div");
  hiddenDiv.classList.add("make-visible");
  btnBar.classList.add("rotate--icons");
  document.querySelector("nav").style.transition = "all 350ms ease-in-out";
  btnBar.classList.add("make-hidden");
  btnClose.classList.remove("make-hidden");
  document.querySelector(".logo").style.filter = "hue-rotate(120deg)";
});

btnClose.addEventListener("click", function () {
  document.querySelector("nav").classList.remove("btnAll");
  hiddenDiv.classList.add("hidden--div");
  hiddenDiv.classList.remove("make-visible");
  btnBar.classList.remove("make-hidden");
  btnClose.classList.add("make-hidden");
  btnClose.classList.add("rotate--icons");
  document.querySelector("nav").style.transition = "all 0.5s ease-in-out";
  document.querySelector(".logo").style.filter = "hue-rotate(360deg)";
});
//Click events end
