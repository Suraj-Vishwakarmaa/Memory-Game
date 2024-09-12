const result = document.getElementById("result");
const grid = document.getElementById("grid");

const cardArray = [
  {
    name: "cheeseburges",
    img: "assets/images/cheeseburger.png",
  },
  {
    name: "fries",
    img: "assets/images/fries.png",
  },
  {
    name: "hotdog",
    img: "assets/images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "assets/images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "assets/images/milkshake.png",
  },
  {
    name: "pizza",
    img: "assets/images/pizza.png",
  },
  {
    name: "cheeseburges",
    img: "assets/images/cheeseburger.png",
  },
  {
    name: "fries",
    img: "assets/images/fries.png",
  },
  {
    name: "hotdog",
    img: "assets/images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "assets/images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "assets/images/milkshake.png",
  },
  {
    name: "pizza",
    img: "assets/images/pizza.png",
  },
];

let cardChoosen = [];
let cardChoosenId = [];
let cardWon = [];

cardArray.sort(() => 0.5 - Math.random());

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const createImg = document.createElement("img");
    createImg.setAttribute("src", "assets/images/blank.png");
    createImg.setAttribute("data-id", i);
    createImg.addEventListener("click", flipCard);
    grid.appendChild(createImg);
  }
}

createBoard();

function checkMatch() {
  const cards = document.querySelectorAll("#grid img");

  const cardIdOne = cardChoosenId[0];
  const cardIdTwo = cardChoosenId[1];

  if (cardIdOne == cardIdTwo) {
    alert("You have clicked the same image");
  }

  if (cardChoosen[0] == cardChoosen[1]) {
    alert("You Found Match!");
    cards[cardIdOne].setAttribute("src", "assets/images/white.png");
    cards[cardIdTwo].setAttribute("src", "assets/images/white.png");
    cards[cardIdOne].removeEventListener("click", flipCard);
    cards[cardIdTwo].removeEventListener("click", flipCard);
    cardWon.push(cardChoosen);
  } else {
    cards[cardIdOne].setAttribute("src", "assets/images/blank.png");
    cards[cardIdTwo].setAttribute("src", "assets/images/blank.png");
    alert("Sorry Try Again!");
  }

  if (cardWon.length == cardArray.length / 2) {
    result.textContent = "Congratulation You Won";
  }

  cardChoosen = [];
  cardChoosenId = [];
}

function flipCard() {
  const cardId = this.getAttribute("data-id");
  cardChoosen.push(cardArray[cardId].name);
  cardChoosenId.push(cardId);
  console.log(cardChoosenId);
  this.setAttribute("src", cardArray[cardId].img);

  if (cardChoosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}
