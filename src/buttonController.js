import { createTask } from "./task.js";

function openSide() {
  const openBtn = document.querySelector(".menu");
  openBtn.addEventListener("click", function () {
    document.getElementById("navbar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  });
}

function closeSide() {
  const closeBtn = document.querySelector(".closebtn");
  closeBtn.addEventListener("click", function () {
    document.getElementById("navbar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  });
}

function openTabs() {
  let tabs = document.querySelectorAll(".tablinks");
  let tabContents = document.querySelectorAll(".tabcontent");
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

function openForm() {
  const openForm = document.getElementById("addtask");
  openForm.addEventListener("click", function () {
    document.querySelector(".form-popup").style.display = "block";
  });
}

function closeForm() {
  const cancelTask = document.getElementById("cancelbtn");
  const form = document.querySelector(".form-container");
  cancelTask.addEventListener("click", function () {
    document.querySelector(".form-popup").style.display = "none";
    form.reset();
  });
}

function addTask() {
  const form = document.querySelector(".form-container");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    createTask();
    document.querySelector(".form-popup").style.display = "none";
    form.reset();
  });
}

function initialLoad() {
  openSide();
  closeSide();
  openTabs();
  openForm();
  closeForm();
  addTask();
}

export { initialLoad };
