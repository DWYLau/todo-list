import { openTabs, openProjectTaskForm } from "./buttonController.js";
import { Task } from "./task.js";

let projects = [];

class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }
}

function createProject() {
  let projectName = document.getElementById("projectname");
  let project = new Project(projectName.value);
  projects.push(project);
  createContent(projects);
  openProjectTaskForm();
}

function createProjectTask() {
  let title = document.getElementById("project-task-title");
  let description = document.getElementById("project-task-description");
  let priority = document.getElementById("project-task-priority");
  let date = document.getElementById("project-task-date");
  let projectName = "a";
  let task = new Task(
    title.value,
    description.value,
    priority.value,
    date.value,
    projectName
  );
  console.log(task);
  projects.forEach((project) => {
    if (project.name === task.project) {
      project.tasks.push(task);
    }
  });
}

function createContent(projectsArray) {
  const sidebar = document.querySelector(".tab");
  const allProjectBtns = sidebar.querySelectorAll(".project");
  allProjectBtns.forEach((button) => button.remove());

  const main = document.getElementById("main");
  const allProjectPages = document.querySelectorAll(".page");
  allProjectPages.forEach((page) => page.remove());

  projectsArray.forEach((project) => {
    const button = document.createElement("button");
    button.classList.add("tablinks");
    button.classList.add("project");
    button.textContent = project.name;
    sidebar.appendChild(button);

    const content = document.createElement("div");
    content.setAttribute("id", project.name);
    content.classList.add("tabcontent");
    content.classList.add("page");
    main.appendChild(content);

    const header = document.createElement("h3");
    header.textContent = project.name;
    content.appendChild(header);

    const addTask = document.createElement("button");
    addTask.textContent = "Add Task";
    addTask.classList.add("add-button");
    addTask.classList.add("add-project-task");
    addTask.setAttribute("id", mainpage.id);
    addTask.addEventListener("click", openProjectTaskForm);

    const deleteProject = document.createElement("button");
    deleteProject.textContent = "Delete Project";
    deleteProject.classList.add("add-button");
    deleteProject.setAttribute("id", "deleteproject");
    deleteProject.addEventListener("click", function () {
      removeProject(project.name);
    });

    content.appendChild(addTask);
    content.appendChild(deleteProject);
  });
  openTabs();
}

function removeProject(projectName) {
  let index = projects.findIndex((x) => x.name === projectName);
  projects.splice(index, 1);
  createContent(projects);
  openTabs();
}

export { createProject, createProjectTask };
