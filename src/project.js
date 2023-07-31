import { openTabs, openProjectTaskForm } from "./interface.js";
import {
  storeTask,
  storeProject,
  removeStoredProject,
  removeStoredTask,
} from "./storage.js";
import {
  Task,
  tasks,
  deleteTask,
  checkTasks,
  appendToProjects,
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
  checkProject(project);
  createContent(projects);
  openProjectTaskForm();
}

function createProjectTask() {
  let title = document.getElementById("project-task-title");
  let priority = document.getElementById("project-task-priority");
  let date = document.getElementById("project-task-date");
  let taskProjectName = taskProjectID;
  let task = new Task(title.value, priority.value, date.value, taskProjectName);
  projects.forEach((project) => {
    if (project.name === task.project) {
      project.tasks.push(task);
    }
  });
  checkTasks(task);
  storeProject(projects);
  storeTask(tasks);
  appendToProjects(tasks);
  appendToProjectPage();
}

function checkProject(project) {
  if (projects.length >= 4) {
    alert("Reached full capacity for projects");
  } else {
    projects.push(project);
  }
}

function appendToProjectPage() {
  const allProjectPages = document.querySelectorAll(".page");
  allProjectPages.forEach((page) => {
    const allPageDivs = page.querySelectorAll("div");
    allPageDivs.forEach((div) => div.remove());
    appendToProjects(tasks);
    projects.forEach((project) => {
      project.tasks.forEach((task) => {
        if (page.id === project.name) {
          createProjectCard(
            page,
            task.title,
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

  const priority = document.createElement("p");
  priority.classList.add("priority");

  const date = document.createElement("p");
  date.classList.add("date");

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("deletebtn");

  card.appendChild(checkbox);
  card.appendChild(title);
  card.appendChild(priority);
  card.appendChild(date);
  card.appendChild(deleteBtn);

  title.textContent = taskTitle;
  priority.textContent = taskPriority;
  changePriorityColour(priority);
  date.textContent = taskDate;
  deleteBtn.textContent = "X";

  deleteBtn.addEventListener("click", function () {
    deleteTask(tasks, taskTitle);
    deleteTask(projectTasks, taskTitle);
    const cards = document.querySelectorAll(".card");
    cards.forEach((square) => {
      square.remove();
    });
    removeStoredTask(taskTitle);
    storeProject(projects);
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
      removeStoredProject(project.name);
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
  tasks = tasks.filter((task) => task.project !== projectName);
  let alltasks = document.getElementById("alltasks");
  alltasks.classList.add("active");
  createContent(projects);
  appendToProjects(tasks);
  openTabs();
}

export {
  projects,
  createContent,
  createProject,
  createProjectTask,
  appendToProjectPage,
};
