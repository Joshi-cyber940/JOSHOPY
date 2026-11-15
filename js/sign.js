const meNav = document.querySelector(".me-nav");

const me = document.querySelector(".me");

me.addEventListener("click", function(event) {

  event.stopPropagation();
  meNav.classList.toggle("active");
});

document.addEventListener("click", function(event) {
 
  if (
    !meNav.contains(event.target) &&
    !me.contains(event.target)
  ) {
    meNav.classList.remove("active");
  }
});

//bcb812zer.joshua...sb_publishable_MltsBA61wduF8s3dLPZ4Kw_WEGXHO7N