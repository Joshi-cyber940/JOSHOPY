console.log("This is my side bar js");

//Give variables to each buttons and the bar
const sideBar = document.querySelector(".side");

const sideBarBtn = document.querySelector(".menu");

const closeSideBar = document.querySelector(".close-side-bar");

sideBarBtn.addEventListener("click", function(event) {

  event.stopPropagation();
  sideBar.classList.toggle("active");
});

closeSideBar.addEventListener("click", function(event) {

  event.stopPropagation();
  sideBar.classList.remove("active");
});

document.addEventListener("click", function(event) {

  if (
    !sideBar.contains(event.target) &&
    !sideBarBtn.contains(event.target)
  ) {
    sideBar.classList.remove("active");
  }
});
