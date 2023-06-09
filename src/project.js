import { openTabs, openProjectTaskForm } from "./buttonController.js";
import {
  Task,
  appendToProjects,
  deleteTask,
  changePriorityColour,
} from "./task.js";

let projects = [];
let taskProjectID = "";

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
  let taskProjectName = taskProjectID;
  let task = new Task(
    title.value,
    description.value,
    priority.value,
    date.value,
    taskProjectName
  );
  projects.forEach((project) => {
    if (project.name === task.project) {
      project.tasks.push(task);
    }
  });
  appendToProjectPage();
}

function appendToProjectPage() {
  const allProjectPages = document.querySelectorAll(".page");
  allProjectPages.forEach((page) => {
    const allPageDivs = page.querySelectorAll("div");
    allPageDivs.forEach((div) => div.remove());
    projects.forEach((project) => {
      project.tasks.forEach((task) => {
        appendToProjects(project.tasks);
        if (page.id === project.name) {
          createProjectCard(
            page,
            task.title,
            task.description,
            task.priority,
            task.dueDate,
            project.tasks
          );
        }
      });
    });
  });
}

function createProjectCard(
  tab,
  taskTitle,
  taskDesc,
  taskPriority,
  taskDate,
  projectTasks
) {
  const card = document.createElement("div");
  card.classList.add("card");
  tab.appendChild(card);

  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.classList.add("checkbox");

  const title = document.createElement("p");
  title.classList.add("title");

  const description = document.createElement("p");
  description.classList.add("description");

  const priority = document.createElement("p");
  priority.classList.add("priority");

  const date = document.createElement("p");

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("deletebtn");

  card.appendChild(checkbox);
  card.appendChild(title);
  card.appendChild(description);
  card.appendChild(priority);
  card.appendChild(date);
  card.appendChild(deleteBtn);

  title.textContent = taskTitle;
  description.textContent = taskDesc;
  priority.textContent = taskPriority;
  changePriorityColour(priority);
  date.textContent = taskDate;
  deleteBtn.textContent = "X";

  deleteBtn.addEventListener("click", function () {
    deleteTask(projectTasks, taskTitle);
    const cards = document.querySelectorAll(".card");
    cards.forEach((square) => {
      square.remove();
    });
    appendToProjects(projectTasks);
    appendToProjectPage();
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
    addTask.setAttribute("id", content.id);
    addTask.addEventListener("click", logID);
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
  appendToProjectPage();
}

function logID(event) {
  taskProjectID = event.target.getAttribute("id");
}

function removeProject(projectName) {
  let index = projects.findIndex((project) => project.name === projectName);
  projects.splice(index, 1);
  createContent(projects);
  openTabs();
}

export { createProject, createProjectTask, appendToProjectPage, taskProjectID };
