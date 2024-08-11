// menu
var clickArea = document.querySelector(".header-nav");
var menu = document.querySelector(".header-dropdown-list");

clickArea.addEventListener("click", appear);
document.addEventListener("click", hide, true);

function appear() {
  clickArea.classList.toggle("change");
  menu.style.display = menu.style.display == "block" ? "none" : "block";
}
function hide() {
  clickArea.classList.remove("change");
  menu.style.display = "none";
}
// menu跳頁
var btnAlbum = document.querySelector(".Album");
var btnAbout = document.querySelector(".About");
btnAlbum.addEventListener("click", toAlbum);
btnAlbum.addEventListener("click", loading);
btnAbout.addEventListener("click", toAbout);
btnAbout.addEventListener("click", loading);

function toAlbum() {
  setTimeout('location.href = "Album.html"', 600);
}
function toAbout() {
  setTimeout('location.href = "About.html"', 600);
}

function loading() {
  document.querySelector(".overlay").style.opacity = "1";
  document.querySelector(".overlay").style.zIndex = "2";
  // document.querySelector(".overlay").style.display = "block";
  // document.querySelector(".overlay").style.transform = "scale(1)";
}

// logo跳頁
var btnLogo = document.querySelector(".logo");
btnLogo.addEventListener("click", toHome);
btnLogo.addEventListener("click", loading);

function toHome() {
  setTimeout('location.href="Home.html"', 600);
}
