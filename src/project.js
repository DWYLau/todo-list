import { openTabs, openProjectTaskForm } from "./buttonController.js";

let projects = [];

class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }
}

function createProject() {
  let name = document.getElementById("projectname");
  let project = new Project(name.value);
  projects.push(project);
  createTabs();
  createPage();
  openTabs();
  openProjectTaskForm();
}

function createTabs() {
  const sidebar = document.querySelector(".tab");
  const allProjectBtns = sidebar.querySelectorAll(".project");
  allProjectBtns.forEach((button) => button.remove());
  projects.forEach((project) => {
    const button = document.createElement("button");
    button.classList.add("tablinks");
    button.classList.add("project");
    button.textContent = project.name;
    sidebar.appendChild(button);
  });
}

function createPage() {
  const main = document.getElementById("main");
  const allProjectPages = document.querySelectorAll(".page");
  allProjectPages.forEach((page) => page.remove());

  projects.forEach((project) => {
    const mainpage = document.createElement("div");
    mainpage.setAttribute("id", project.name);
    mainpage.classList.add("tabcontent");
    mainpage.classList.add("page");
    main.appendChild(mainpage);

    const header = document.createElement("h3");
    header.textContent = project.name;
    mainpage.appendChild(header);

    const addTask = document.createElement("button");
    addTask.textContent = "Add Task";
    addTask.classList.add("add-button");
    addTask.setAttribute("id", "addprojecttask");
    addTask.addEventListener("click", function () {
      openProjectTaskForm();
    });

    const deleteProject = document.createElement("button");
    deleteProject.textContent = "Delete Project";
    deleteProject.classList.add("add-button");
    deleteProject.setAttribute("id", "deleteproject");
    deleteProject.addEventListener("click", function () {
      removeProject(project.name);
    });

    mainpage.appendChild(addTask);
    mainpage.appendChild(deleteProject);
  });
}

function removeProject(projectname) {
  let index = projects.findIndex((x) => x.name === projectname);
  projects.splice(index, 1);
  createTabs();
  createPage();
  openTabs();
}

export { createProject };
