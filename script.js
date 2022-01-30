// DOM
var $slider = document.querySelector(".slider__wrapper");
var $menuItems = document.querySelectorAll(".nav__menu-item");
$slider = document.querySelector(".slider__wrapper");

$menuItems.forEach((item, idx) => {
  item.addEventListener("click", () => {
    $slider.style.transform = `translateX(-${idx * 100}vw)`;
  });
});
