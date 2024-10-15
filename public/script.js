function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  const profile = document.querySelector(".tmp5");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
  profile.classList.toggle("open");
}

$(document).ready(function () {
  $(window).scroll(function () {
    $(".section").each(function () {
      var sectionTop = $(this).offset().top;
      var sectionBottom = sectionTop + $(this).outerHeight();
      var scrollPosition = $(window).scrollTop() + $(window).height();

      if (scrollPosition > sectionTop && scrollPosition < sectionBottom) {
        $(this).addClass("visible");
      }
    });
  });
});
