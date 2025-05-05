//! guess word object
const wordsToGuess = [
  {
    word: "sunflower",
    hint: "A bright yellow flower that follows the sun",
  },
  {
    word: "keyboard",
    hint: "Input device with keys for typing on a computer",
  },
  {
    word: "mountain",
    hint: "A large natural elevation of the earth's surface",
  },
  {
    word: "guitar",
    hint: "A musical instrument with strings, often played with fingers or a pick",
  },
  {
    word: "diamond",
    hint: "A precious gemstone made of carbon, known for its hardness",
  },
  {
    word: "pizza",
    hint: "A popular Italian dish with dough, cheese, and toppings",
  },
  {
    word: "astronaut",
    hint: "A person trained to travel and work in space",
  },
  {
    word: "volcano",
    hint: "A mountain that erupts with lava, ash, and gases",
  },
  {
    word: "notebook",
    hint: "A book of blank pages for writing notes",
  },
  {
    word: "rainbow",
    hint: "A colorful arc in the sky caused by sunlight and rain",
  },
];

let rowsBtn = document.querySelectorAll(".char-row");
let display = document.querySelector(".display");
let clearDisplayBtn = document.querySelector(".clear-display");
let removeLastCharBtn = document.querySelector(".delete-char");
let hintText = document.querySelector(".hint-text");
hintText.textContent = wordsToGuess[0].hint;
let restartBtn = document.querySelector(".restart-btn");
let submitBtn = document.querySelector(".submit-btn");
let hangImg = document.querySelector(".hang-img");

for (let i = 0; i < rowsBtn.length; i++) {
  rowsBtn[i].childNodes.forEach((element) => {
    element.addEventListener("click", () => {
      if (element == clearDisplayBtn) {
        clearDisplay();
      } else if (element == removeLastCharBtn) {
        removeLastChar();
      } else if (element == restartBtn) {
        hintRandom();
        clearDisplay();
      } else if (element == submitBtn) {
        checkGuess();
        clearDisplay()
      } else {
        display.value += element.textContent;
      }
    });
  });
}

const clearDisplay = () => {
  display.value = "";
};

const removeLastChar = () => {
  display.value = display.value.substr(0, display.value.length - 1);
};

const hintRandom = () => {
  let randomGuess = Math.floor(Math.random() * wordsToGuess.length);
  hintText.textContent = wordsToGuess[randomGuess].hint;
  hangImg.src = "./public/images/0.jpg";
};
let tryGuess = 0;
const checkGuess = () => {
  let getIndex = wordsToGuess.findIndex((e) => e.hint == hintText.textContent);
  if (wordsToGuess[getIndex].word.toUpperCase() == display.value) {
    alert("congratulations ser");
  } else {
    tryGuess++;
    console.log(hangImg);
    hangImg.src = `./public/images/${tryGuess}.jpg`;
    if (tryGuess == 10) {
      setTimeout(() => {
        alert("you lose !");
        hintRandom();
      }, 500);
    }
  }
};
