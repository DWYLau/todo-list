export * from "./buttonController.js";

const openBtn = document.querySelector(".menu");
openBtn.addEventListener("click", function () {
  document.getElementById("mySidepanel").style.width = "250px";
  console.log("YEAH GGGG");
});

const closeBtn = document.querySelector(".closebtn");
closeBtn.addEventListener("click", function () {
  document.getElementById("mySidepanel").style.width = "0";
  console.log("FUCK SAKE");
});
