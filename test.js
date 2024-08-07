var i = 0;

document
  .querySelector(".card-right-arrow")
  .addEventListener("click", rightSlides);

function rightSlides() {
  var cardGroup = document.querySelector(".card-photo-group");
  var maxClicks = cardGroup.querySelectorAll("div").length;
  if (i <= maxClicks - 1) {
    i++;
  }  
  console.log(i);

  if (i > maxClicks - 1) {
    document.querySelector(".card-right-arrow").disabled = true;
    document.querySelector(".card-left-arrow").disabled = false;
  } else {
    cardGroup.style.transform += "translateX(-490px)";
  }
}
document
  .querySelector(".card-left-arrow")
  .addEventListener("click", leftSlides);

function leftSlides() {
  var cardGroup = document.querySelector(".card-photo-group");
  var maxClicks = cardGroup.querySelectorAll("div").length;
  if (i >0) {
    i--
  }
  console.log(i);

  if (i <= 0) {
    document.querySelector(".card-left-arrow").disabled = true;
  } else {
    document.querySelector(".card-right-arrow").disabled = false;
    cardGroup.style.transform += "translateX(490px)";
  }
}
