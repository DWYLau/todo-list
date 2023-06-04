function openSide() {
  const openBtn = document.querySelector(".menu");
  openBtn.addEventListener("click", function () {
    document.getElementById("navbar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  });
}

function closeSide() {
  const closeBtn = document.querySelector(".closebtn");
  closeBtn.addEventListener("click", function () {
    document.getElementById("navbar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  });
}

function openTabs() {
  let tabs = document.querySelectorAll(".tablinks");
  let tabContents = document.querySelectorAll(".tabcontent");
  console.log(tabs);
  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      tabContents.forEach((content) => {
        content.classList.remove("active");
      });
      tabs.forEach((tab) => {
        tab.classList.remove("active");
      });
      tabContents[index].classList.add("active");
      tabs[index].classList.add("active");
    });
  });
}

function openForm() {
  const addTask = document.getElementById("addtask");
  addTask.addEventListener("click", function () {
    document.querySelector(".form-popup").style.display = "block";
  });
}

function closeForm() {
  const cancelTask = document.getElementById("cancelbtn");
  cancelTask.addEventListener("click", function () {
    document.querySelector(".form-popup").style.display = "none";
  });
}

function initialLoad() {
  openSide();
  closeSide();
  openTabs();
  openForm();
  closeForm();
}

export { initialLoad };
