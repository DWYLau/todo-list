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
  appendTask();
  console.log(task);
  console.log(myTasks);
}

function appendTask() {
  const allTasksTab = document.getElementById("alltasks");
  const tasksDivs = allTasksTab.document.querySelectorAll("div");
  tasksDivs.forEach((div) => div.remove());

  myTasks.forEach((task) => {
    const card = document.createElement(div);
    allTasksTab.appendChild(card);
    card.classList.add("card");
  });
}

export { createTask };
