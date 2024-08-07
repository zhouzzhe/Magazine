document
.querySelector(".card-right-arrow")
.addEventListener("click", rightSlides);
var i = 0;

function rightSlides() {
  var cardGroup = document.querySelector(".card-photo-group");
  var maxClicks = cardGroup.querySelectorAll("div").length;
  i++;

  if (i > maxClicks-1) {
    document.querySelector(".card-right-arrow").disabled = true;
  } else {
    console.log("ok");
    cardGroup.style.transform += "translateX(-490px)";
  }
}
document
.querySelector(".card-left-arrow")
.addEventListener("click", leftSlides);
var j = 0;

function leftSlides() {
  var cardGroup = document.querySelector(".card-photo-group");
  var maxClicks = cardGroup.querySelectorAll("div").length;
  j++;

  
  if (j > maxClicks-1) {
    document.querySelector(".card-left-arrow").disabled = true;
  } else {
    console.log("ok");
    cardGroup.style.transform += "translateX(490px)";
  }
}

// if (slideIndex == 1) {
//   slide.style.transform = "translateX(-490px)";
// } else if (slideIndex == 2) {
//   slide.style.transform = "translateX(-980px)";
// } else if (slideIndex == 3) {
//   slide.style.transform = "translateX(-1470px)";
// } else {
//   slide.style.transform = "translateX(-1960px)";
// }
// slideIndex++;
