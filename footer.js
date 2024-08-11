// footer跳轉頁面
var footerBtnAlbum = document.querySelectorAll(".footer-toolbar-option")[0];
var footerBtnAbout = document.querySelectorAll(".footer-toolbar-option")[1];
footerBtnAlbum.addEventListener("click", toAlbum);
footerBtnAlbum.addEventListener("click", loading);
footerBtnAbout.addEventListener("click", toAbout);
footerBtnAbout.addEventListener("click", loading);

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

// 跳轉IG
var btnIG = document.querySelector(".instagram");
btnIG.addEventListener("click", toIG);
function toIG() {
  location.href = "https://www.instagram.com/zzhe__/";
}
// 複製Mail
var btnMail = document.querySelector(".mail");
btnMail.addEventListener("click", copyMail);
function copyMail() {
  navigator.clipboard.writeText("zzhe828@gamil.com");
  
}
