import { isWithinInterval, parseISO } from "date-fns";

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
  console.log(task);
  console.log(myTasks);
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
    checkDate(task.dueDate);
  });
}

function checkDate(dueDate) {
  const today = new Date();
  const nextSevenDays = new Date(new Date().setDate(new Date().getDate() + 7));
  if (parseISO(dueDate) === today) {
    const todayTab = document.getElementById("today");
    console.log("hellotoday");
    createCard(todayTab);
  } else if (
    isWithinInterval(parseISO(dueDate), {
      start: today,
      end: nextSevenDays,
    })
  ) {
    console.log("hellotest");
  }
  console.log(dueDate);
  console.log(parseISO(dueDate) === today);
  console.log(today);
}

export { createTask };
