export * from "./buttonController.js";

const openBtn = document.querySelector(".menu");
openBtn.addEventListener("click", function () {
  document.getElementById("navbar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
});

const closeBtn = document.querySelector(".closebtn");
closeBtn.addEventListener("click", function () {
  document.getElementById("navbar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
});

function openTabs() {
  let tabs = document.querySelectorAll(".tablinks");
  let tabContents = document.querySelectorAll(".tabcontent");
  console.log(tabs);
  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      tabContents.forEach((content) => {
        content.classList.remove("active");
      });
      tabs.forEach((tab) => {
        tab.classList.remove("active");
      });
      tabContents[index].classList.add("active");
      tabs[index].classList.add("active");
    });
  });
}

openTabs();
