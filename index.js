const hamburger = document.getElementById("hamburger-menu");
const closeBtn = document.getElementById("close-btn");
const nav = document.getElementById("nav");

closeBtn.addEventListener("click", () => {
  nav.style.display = "none";
});

hamburger.addEventListener("click", () => {
  nav.style.display = "flex";
});
