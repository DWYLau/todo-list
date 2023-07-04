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
  appendSidebar();
  appendMain();
}

function appendSidebar() {
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

function appendMain() {
  const main = document.getElementById("main");
}

export { createProject };
