console.log('This is my menu js.');

//make the three dots to work
const dotsNav = document.querySelector(".dots-nav");

const dotsDiv = document.querySelector(".dots-div");


dotsDiv.addEventListener("click", function(event) {

  event.stopPropagation();
  dotsNav.classList.toggle("active");
});

document.addEventListener("click", function(event) {
  if (
    !dotsNav.contains(event.target) &&
    !dotsDiv.contains(event.target)
  ) {
    dotsNav.classList.remove("active");
  }
});