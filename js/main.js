var burger= document.querySelector(".hamburger");
var nav =document.querySelector(".header__nav");

burger.addEventListener("click", function(){
  nav.classList.toggle('header__nav--active')
  burger.classList.toggle('hamburger--active')
});