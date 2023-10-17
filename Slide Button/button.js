const background = document.querySelector(".background");
const blurToggle = document.getElementById("blurToggle");

blurToggle.addEventListener("mouseover", () => {
  background.style.filter = "blur(5px)";
});

blurToggle.addEventListener("mouseout", () => {
  background.style.filter = "blur(0)";
});
