import { isWithinInterval, parseISO, format } from "date-fns";
import { beTarask } from "date-fns/locale";

let myTasks = [];

export class Task {
  constructor(title, description, priority, dueDate) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.dueDate = dueDate;
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
  myTasks.push(task);
  appendToAllTask();
}

function appendToAllTask() {
  const allTasksTab = document.getElementById("alltasks");
  const tasksDivs = allTasksTab.querySelectorAll("div");
  tasksDivs.forEach((div) => div.remove());
  createCard(allTasksTab);
}

function createCard(tab) {
  myTasks.forEach((task) => {
    const card = document.createElement("div");
    tab.appendChild(card);
    card.classList.add("card");

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

    title.textContent = task.title;
    description.textContent = task.description;
    priority.textContent = task.priority;
    priority.style.background = "green";
    date.textContent = task.dueDate;
    deleteBtn.textContent = "X";

    if (checkDate(task.dueDate) === true) {
      const tabContent = document.getElementById("today");
      const tasksDivs = tabContent.querySelectorAll("div");
      tasksDivs.forEach((div) => div.remove());

      const card = document.createElement("div");
      tabContent.appendChild(card);
      card.classList.add("card");

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

      title.textContent = task.title;
      description.textContent = task.description;
      priority.textContent = task.priority;
      priority.style.background = "green";
      date.textContent = task.dueDate;
      deleteBtn.textContent = "X";
    } else {
      return false;
    }
  });
}

function checkDate(date) {
  const today = new Date();
  let day = today.getDate();
  let month = today.getMonth();
  let year = today.getFullYear();
  let formatDate = format(new Date(year, month, day), "yyyy-MM-dd");

  const nextSevenDays = new Date(new Date().setDate(new Date().getDate() + 7));

  if (date === formatDate) {
    return true;
  } else {
    console.log("NO MATCH");
    console.log(date);
    console.log(formatDate);
  }
}

export { createTask };
