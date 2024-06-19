/* Sidebar menu*/
// close hamburger menu after click a
$(".menu-list li a").on("click", function () {
  $("#hamburger-menu").click();
});
document.addEventListener("DOMContentLoaded", function () {
  var menuLinks = document.querySelectorAll(".menu-link");

  for (var i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener("click", function () {
      document.getElementById("menu_checkbox").checked = false;
    });
  }
});

/* Header */
$(document).ready(function () {
  let currentSlide = 1;
  const totalSlides = 4;
  const changeInterval = 2500; // 2.5 seconds

  setInterval(function () {
    // Check the next radio button
    $(`input[type=radio][title=slide${currentSlide}]`).prop("checked", true);

    // Update the current slide number
    currentSlide++;

    if (currentSlide > totalSlides) {
      currentSlide = 1; // Reset to the first slide after the last one
    }
  }, changeInterval);
});
