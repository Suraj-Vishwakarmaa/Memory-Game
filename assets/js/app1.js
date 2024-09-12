"use strict";

const imageArray = [
  {
    name: "cheeseburger",
    src: "assets/images/cheeseburger.png",
  },
  {
    name: "fries",
    src: "assets/images/fries.png",
  },
  {
    name: "hotdog",
    src: "assets/images/hotdog.png",
  },
  {
    name: "ice-cream",
    src: "assets/images/ice-cream.png",
  },
  {
    name: "milkshake",
    src: "assets/images/milkshake.png",
  },
  {
    name: "pizza",
    src: "assets/images/pizza.png",
  },
  {
    name: "cheeseburger",
    src: "assets/images/cheeseburger.png",
  },
  {
    name: "fries",
    src: "assets/images/fries.png",
  },
  {
    name: "hotdog",
    src: "assets/images/hotdog.png",
  },
  {
    name: "ice-cream",
    src: "assets/images/ice-cream.png",
  },
  {
    name: "milkshake",
    src: "assets/images/milkshake.png",
  },
  {
    name: "pizza",
    src: "assets/images/pizza.png",
  },
];

const grid = document.getElementById("grid");

const result = document.getElementById("result");

let cardIdArray = [];
let cardImageArray = [];
let cardWon = [];

imageArray.sort(() => 0.5 - Math.random());

console.log(imageArray);

function createCard() {
  for (let i = 0; i < imageArray.length; i++) {
    const cardImg = document.createElement("img");
    cardImg.setAttribute("src", "assets/images/blank.png");
    cardImg.setAttribute("data-id", i);
    cardImg.addEventListener("click", flipImage);
    grid.appendChild(cardImg);
  }
}

createCard();

function flipCheck() {
  let cards = document.querySelectorAll("#grid img");
  if (cardIdArray[0] === cardIdArray[1]) {
    alert("You Clicked on Same Card");
    cards[cardIdArray[0]].setAttribute("src", "assets/images/blank.png");
  } else if (cardImageArray[0] === cardImageArray[1]) {
    alert("You Won !");
    cards[cardIdArray[0]].setAttribute("src", "assets/images/white.png");
    cards[cardIdArray[1]].setAttribute("src", "assets/images/white.png");
    cards[cardIdArray[0]].removeEventListener("click", flipImage);
    cards[cardIdArray[1]].removeEventListener("click", flipImage);
    cardWon.push("cardImageArray");
  } else {
    alert("Sorry Try Again !");
    cards[cardIdArray[0]].setAttribute("src", "assets/images/blank.png");
    cards[cardIdArray[1]].setAttribute("src", "assets/images/blank.png");
  }

  if (cardWon.length === imageArray.length / 2) {
    result.textContent = "Congratulation You Won";
  }
  cardIdArray = [];
  cardImageArray = [];
}

function flipImage() {
  const cardId = this.getAttribute("data-id");
  this.setAttribute("src", imageArray[cardId].src);
  cardIdArray.push(cardId);
  cardImageArray.push(imageArray[cardId].name);
  if (cardImageArray.length === 2) {
    setTimeout(flipCheck, 500);
  }
}
