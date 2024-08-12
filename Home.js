// 第一組照片

document
  .querySelector("#card-right-arrow1")
  .addEventListener("click", rightSlides1);

var i = 0;

function rightSlides1() {
  var cardGroup = document.querySelector("#card-photo-group1");
  var maxClicks = cardGroup.querySelectorAll("div").length;
  if (i <= maxClicks - 1) {
    i++;
    console.log(i);
  }

  if (i > maxClicks - 1) {
    document.querySelector("#card-right-arrow1").disabled = true;
    document.querySelector("#card-left-arrow1").disabled = false;
  } else {
    cardGroup.style.transform += "translateX(-490px)";
  }
}
document
  .querySelector("#card-left-arrow1")
  .addEventListener("click", leftSlides1);

function leftSlides1() {
  var cardGroup = document.querySelector("#card-photo-group1");
  var maxClicks = cardGroup.querySelectorAll("div").length;
  if (i > 0) {
    i--;
    console.log(i);
  }

  if (i < 0) {
    document.querySelector("#card-left-arrow1").disabled = true;
  } else if (i == 0) {
    document.querySelector("#card-left-arrow1").disabled = true;
    cardGroup.style.transform = "translateX(0px)";
  } else {
    document.querySelector("#card-right-arrow1").disabled = false;
    cardGroup.style.transform += "translateX(490px)";
  }
}

// 第二組照片
var j = 0;

document
  .querySelector("#card-right-arrow2")
  .addEventListener("click", rightSlides2);

function rightSlides2() {
  var cardGroup = document.querySelector("#card-photo-group2");
  var maxClicks = cardGroup.querySelectorAll("div").length;
  if (j <= maxClicks - 1) {
    j++;
  }
  console.log(j);

  if (j > maxClicks - 1) {
    document.querySelector("#card-right-arrow2").disabled = true;
    document.querySelector("#card-left-arrow2").disabled = false;
  } else {
    cardGroup.style.transform += "translateX(-490px)";
  }
}
document
  .querySelector("#card-left-arrow2")
  .addEventListener("click", leftSlides2);

function leftSlides2() {
  var cardGroup = document.querySelector("#card-photo-group2");
  var maxClicks = cardGroup.querySelectorAll("div").length;
  if (j > 0) {
    j--;
  }
  console.log(j);

  if (j < 0) {
    document.querySelector("#card-left-arrow2").disabled = true;
  } else if (j == 0) {
    document.querySelector("#card-left-arrow2").disabled = true;
    cardGroup.style.transform = "translateX(0px)";
  } else {
    document.querySelector("#card-right-arrow2").disabled = false;
    cardGroup.style.transform += "translateX(490px)";
  }
}

// 第三組照片
var k = 0;

document
  .querySelector("#card-right-arrow3")
  .addEventListener("click", rightSlides3);

function rightSlides3() {
  var cardGroup = document.querySelector("#card-photo-group3");
  var maxClicks = cardGroup.querySelectorAll("div").length;
  if (k <= maxClicks - 1) {
    k++;
  }
  console.log(k);

  if (k > maxClicks - 1) {
    document.querySelector("#card-right-arrow3").disabled = true;
    document.querySelector("#card-left-arrow3").disabled = false;
  } else {
    cardGroup.style.transform += "translateX(-490px)";
  }
}
document
  .querySelector("#card-left-arrow3")
  .addEventListener("click", leftSlides3);

function leftSlides3() {
  var cardGroup = document.querySelector("#card-photo-group3");
  var maxClicks = cardGroup.querySelectorAll("div").length;
  if (k > 0) {
    k--;
  }
  console.log(k);

  if (k < 0) {
    document.querySelector("#card-left-arrow3").disabled = true;
  } else if (k == 0) {
    document.querySelector("#card-left-arrow3").disabled = true;
    cardGroup.style.transform = "translateX(0px)";
  } else {
    document.querySelector("#card-right-arrow3").disabled = false;
    cardGroup.style.transform += "translateX(490px)";
  }
}

// 跳轉文章loading
function loading() {
  document.querySelector(".overlay").style.opacity = "1";
  document.querySelector(".overlay").style.zIndex = "2";
  // document.querySelector(".overlay").style.display = "block";
  // document.querySelector(".overlay").style.transform = "scale(1)";
}
// 跳轉文章7
var btnPage7 = document.querySelector(".s1-content-intro");
btnPage7.addEventListener("click", toPage7);
btnPage7.addEventListener("click", loading);
function toPage7() {
  setTimeout('location.href = "page7.html"', 800);
}

// 跳轉文章5
var btnPage5 = document.querySelector(".s4-content-intro");
btnPage5.addEventListener("click", toPage5);
btnPage5.addEventListener("click", loading);
function toPage5() {
  setTimeout('location.href = "page5.html"', 800);
}

// More按鈕跳轉Album
var btnMore1 = document.querySelector("#moreAlbum1");
btnMore1.addEventListener("click", toMore);
btnMore1.addEventListener("click", loading);
var btnMore2 = document.querySelector("#moreAlbum2");
btnMore2.addEventListener("click", toMore);
btnMore2.addEventListener("click", loading);

function toMore() {
  setTimeout('location.href="Album.html"', 600);
}

// Random 跳轉page4
var btnRandom1 = document.querySelector("#random-photo1")
btnRandom1.addEventListener('click', toPage4)
btnRandom1.addEventListener('click', loading)
function toPage4() {
  setTimeout('location.href="page4.html"', 600);
}
