import { createProject, createProjectTask } from "./project.js";
import { createTask, tasks } from "./task.js";

function openSide() {
  const openBtn = document.querySelector(".menu");
  openBtn.addEventListener("click", function () {
    document.getElementById("navbar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  });
}

function closeSide() {
  const closeBtn = document.querySelector(".close-button");
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
    document.querySelector(".form-task").style.display = "block";
    document.querySelector(".form-project").style.display = "none";
    document.querySelector(".form-project-task").style.display = "none";
  });
}

function closeForm() {
  const cancelForm = document.getElementById("taskcancel");
  const form = document.querySelector(".form-container");
  cancelForm.addEventListener("click", function () {
    document.querySelector(".form-task").style.display = "none";
    form.reset();
  });
}

function openProjectForm() {
  const openProject = document.getElementById("addproject");
  openProject.addEventListener("click", function () {
    document.querySelector(".form-project").style.display = "block";
    document.querySelector(".form-task").style.display = "none";
    document.querySelector(".form-project-task").style.display = "none";
  });
}

function closeProjectForm() {
  const cancelForm = document.getElementById("projectcancel");
  const form = document.getElementById("projectform");
  cancelForm.addEventListener("click", function () {
    document.querySelector(".form-project").style.display = "none";
    form.reset();
  });
}

function openProjectTaskForm() {
  const openForm = document.getElementById("addprojecttask");
  openForm.addEventListener("click", function () {
    document.querySelector(".form-project-task").style.display = "block";
    document.querySelector(".form-task").style.display = "none";
    document.querySelector(".form-project").style.display = "none";
  });
}

function closeProjectTaskForm() {
  const cancelForm = document.getElementById("projecttaskcancel");
  const form = document.getElementById("project-task-form");
  cancelForm.addEventListener("click", function () {
    document.querySelector(".form-project-task").style.display = "none";
    form.reset();
  });
}

function addTask() {
  const form = document.querySelector(".form-container");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    createTask(tasks);
    document.querySelector(".form-task").style.display = "none";
    form.reset();
  });
}

function addProject() {
  const form = document.getElementById("projectform");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    createProject();
    document.querySelector(".form-project").style.display = "none";
    form.reset();
  });
}

function addProjectTask(projectName, projectTask) {
  const form = document.getElementById("project-task-form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    createProjectTask(projectName, projectTask);
    document.querySelector(".form-project-task").style.display = "none";
    form.reset();
  });
}

function initialLoad() {
  openSide();
  closeSide();
  openTabs();
  openForm();
  closeForm();
  openProjectForm();
  closeProjectForm();
  closeProjectTaskForm();
  addTask();
  addProject();
}

export { initialLoad, openTabs, openForm, openProjectTaskForm, addProjectTask };
