// 第一組照片
var i = 0;

document
  .querySelector("#card-right-arrow1")
  .addEventListener("click", rightSlides1);

function rightSlides1() {
  var cardGroup = document.querySelector("#card-photo-group1");
  var maxClicks = cardGroup.querySelectorAll("div").length;
  if (i <= maxClicks - 1) {
    i++;
  }
  console.log(i);

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
  }
  console.log(i);

  if (i <= 0) {
    document.querySelector("#card-left-arrow1").disabled = true;
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

  if (j <= 0) {
    document.querySelector("#card-left-arrow2").disabled = true;
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
  console.log(i);

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

  if (k <= 0) {
    document.querySelector("#card-left-arrow3").disabled = true;
  } else {
    document.querySelector("#card-right-arrow3").disabled = false;
    cardGroup.style.transform += "translateX(490px)";
  }
}
