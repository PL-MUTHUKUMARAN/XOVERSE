const menuContainer = document.getElementById("menuContainer");
const pageBody = document.getElementById("pageBody");
pageBody.addEventListener("click", () => {
  const sfx = document.getElementById("sfxGM");
  setTimeout(() => {
    sfx.play();
  }, 20);
});

menuContainer.addEventListener("mouseenter", () => {
  pageBody.style.backgroundImage = "url('bg1.jpg')";
});
menuContainer.addEventListener("mouseleave", () => {
  pageBody.style.backgroundImage = "url('bg2.jpg')";
});
