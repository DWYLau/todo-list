import { tasks, appendToProjects } from "./task";
import { projects, createContent } from "./project";

function storeTask(array) {
  localStorage.setItem("tasks", JSON.stringify(array));
}

function loadTasks() {
  let array = [];
  localStorage.setItem("tasks", JSON.stringify(array));
  let storedTasks = Array.from(JSON.parse(localStorage.getItem("tasks")));
  tasks.push(storedTasks);
  tasks = tasks.flat();
  appendToProjects(tasks);
}

function removeStoredTask(title) {
  let storedTasks = Array.from(JSON.parse(localStorage.getItem("tasks")));
  let index = storedTasks.findIndex((task) => task.title === title);
  storedTasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(storedTasks));
}

function storeProject(array) {
  localStorage.setItem("projects", JSON.stringify(array));
}

function loadProject() {
  let array = [];
  localStorage.setItem("projects", JSON.stringify(array));
  let storedProject = Array.from(JSON.parse(localStorage.getItem("projects")));
  projects.push(storedProject);
  projects = projects.flat();
  createContent(projects);
}

function removeStoredProject(projectName) {
  let storedProject = Array.from(JSON.parse(localStorage.getItem("projects")));
  let index = storedProject.findIndex(
    (project) => project.name === projectName
  );
  storedProject.splice(index, 1);
  tasks = tasks.filter((task) => task.project !== projectName);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  localStorage.setItem("projects", JSON.stringify(storedProject));
}

export {
  loadTasks,
  storeTask,
  removeStoredTask,
  storeProject,
  loadProject,
  removeStoredProject,
};
