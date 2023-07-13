import { isWithinInterval, parseISO, format } from "date-fns";
import { appendToProjectPage } from "./project";

let tasks = [];

class Task {
  constructor(title, description, priority, dueDate, project) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.dueDate = dueDate;
    this.project = project;
  }
}

function createTask() {
  let title = document.getElementById("title");
  let description = document.getElementById("description");
  let priority = document.getElementById("priority");
  let date = document.getElementById("date");
  let task = new Task(
    title.value,
    description.value,
    priority.value,
    date.value
  );
  tasks.push(task);
  appendToProjects(tasks);
  appendToProjectPage();
}

function appendToProjects(array) {
  const allTasksTab = document.getElementById("alltasks");
  const allTasksDivs = allTasksTab.querySelectorAll("div");
  allTasksDivs.forEach((div) => div.remove());

  const todayTab = document.getElementById("today");
  const todayTaskDivs = todayTab.querySelectorAll("div");
  todayTaskDivs.forEach((div) => div.remove());

  const nextSevenTab = document.getElementById("nextseven");
  const nextSevenTaskDivs = nextSevenTab.querySelectorAll("div");
  nextSevenTaskDivs.forEach((div) => div.remove());
  array.forEach((task) => {
    createCard(
      allTasksTab,
      task.title,
      task.description,
      task.priority,
      task.dueDate
    );
    if (checkDate(task.dueDate) === true) {
      createCard(
        todayTab,
        task.title,
        task.description,
        task.priority,
        task.dueDate
      );
    } else if (checkDate(task.dueDate) === false) {
      createCard(
        nextSevenTab,
        task.title,
        task.description,
        task.priority,
        task.dueDate
      );
    }
  });
}

function createCard(tab, taskTitle, taskDesc, taskPriority, taskDate) {
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
    deleteTask(tasks, taskTitle);
    const cards = document.querySelectorAll(".card");
    cards.forEach((square) => {
      square.remove();
    });
    appendToProjects(tasks);
    appendToProjectPage();
  });
}

function changePriorityColour(priority) {
  priority.style.color = "black";
  if (priority.textContent === "High") {
    priority.style.background = "#FF0000";
  } else if (priority.textContent === "Medium") {
    priority.style.background = "#FFFF00";
  } else {
    priority.style.background = "#00FF00";
  }
}

function deleteTask(array, title) {
  let index = array.findIndex((task) => task.title === title);
  array.splice(index, 1);
}

function checkDate(date) {
  const today = new Date();
  let day = today.getDate();
  let month = today.getMonth();
  let year = today.getFullYear();
  let formatDate = format(new Date(year, month, day), "yyyy-MM-dd");
  const nextSevenDays = new Date(new Date().setDate(new Date().getDate() + 7));
  const withinDates = isWithinInterval(parseISO(date), {
    start: today,
    end: nextSevenDays,
  });

  if (date === formatDate) {
    return true;
  } else if (withinDates === true) {
    return false;
  }
}

export {
  createTask,
  Task,
  tasks,
  appendToProjects,
  createCard,
  changePriorityColour,
  deleteTask,
};
