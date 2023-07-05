import { openTabs } from "./buttonController.js";

let myProjects = [];

class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }
}

function createProject() {
  let name = document.getElementById("projectname");
  let project = new Project(name.value);
  myProjects.push(project);
  console.log(myProjects);
  createTabs();
  createPage();
}

function createTabs() {
  const sidebar = document.querySelector(".tab");
  const allProjectBtns = sidebar.querySelectorAll(".project");
  allProjectBtns.forEach((button) => button.remove());
  myProjects.forEach((project) => {
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

  myProjects.forEach((project) => {
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
    addTask.classList.add("addbtns");
    addTask.setAttribute("id", "addtask");

    const deleteProject = document.createElement("button");
    deleteProject.textContent = "Delete Project";
    deleteProject.classList.add("addbtns");
    deleteProject.setAttribute("id", "deleteproject");

    mainpage.appendChild(addTask);
    mainpage.appendChild(deleteProject);
    openTabs();
  });
}

export { createProject };
