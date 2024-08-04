document.addEventListener("DOMContentLoaded", function() {

  var element = document.getElementById("myElement");
  element.classList.add("visible");


  var wrapperTitle = document.querySelector('.wrapper-title');
  var titleElement = wrapperTitle.querySelector('.product__title');
  var afterTitleElement = wrapperTitle.querySelector('.product__after-title');

  setTimeout(function() {
      titleElement.classList.add('animated-title');
      afterTitleElement.classList.add('animated-after-title');
  }, 1000);
});
