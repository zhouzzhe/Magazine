document.querySelector(".header-nav").addEventListener("click", myClick);
var fla;
var menu = document.querySelector(".header-nav");
function myClick() {
  menu.classList.toggle("change");

  document.querySelector(".header-dropdown-list").style.display =
    document.querySelector(".header-dropdown-list").style.display == "block"
      ? "none"
      : "block";
}
