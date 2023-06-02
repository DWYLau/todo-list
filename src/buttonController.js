export * from "./buttonController.js";

const openBtn = document.querySelector(".menu");
openBtn.addEventListener("click", function () {
  document.getElementById("navbar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
});

const closeBtn = document.querySelector(".closebtn");
closeBtn.addEventListener("click", function () {
  document.getElementById("navbar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
});

function openTab(evt, tabName) {
  // Declare all variables
  let i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}
