let selectedWord;

const wrongLettersEl = document.getElementById("wrong-letters-container");
const wordEl = document.getElementById("word-container");
const popup = document.getElementById("popup-container");
const notification = document.getElementById("notification-container");
const finalMessage = document.getElementById("final-message");
const playAgainBtn = document.getElementById("play-button");
const figure_parts = document.querySelectorAll(".figure-parts")

const correctLetters = [];
const wrongLetters = [];

const letter_previously_entered = document.getElementById(
  "letter_previously_entered"
);

function updateWrongLetters() {
  //wrongLetters.sort();
  let result = "<p>Wrong Letters: </p>";
  for (const letter of wrongLetters) {
    result += "<span>" + letter + "</span>";
  }
  result = result.replaceAll("</span><span>" , "</span>, <span>")
  wrongLettersEl.innerHTML = result;
  figure_parts.forEach(function(part, index){
        if(index < wrongLetters.length){
            part.style.display = "block";
        }
        else{ 
            part.style.display = "none";
        }
  });
}

function shownotification(letter) {
  letter_previously_entered.textContent = letter;
  notification.classList.add("show");
  setTimeout(function () {
    notification.classList.remove("show");
  }, 2000);
}

window.addEventListener("keydown", function (event) {
  const keyPress = event.key;
  if (keyPress.match(/^[a-z]/g)) {
        if (selectedWord.includes(keyPress)) {
            if (!correctLetters.includes(keyPress)) {
                //First time I Have hit the key
                correctLetters.push(keyPress);
                console.log("Correct " + correctLetters);
                displayWord();
            } 
            else {
            shownotification(keyPress);
            console.log("Correct " + correctLetters);
        }
        } 
        else {
            if (!wrongLetters.includes(keyPress)) {
                //First time I Have hit the key
                wrongLetters.push(keyPress);
                updateWrongLetters();
            } 
            else {
                shownotification(keyPress);
                console.log("InCorrect " + wrongLetters);
            }
        }
    }
});

function getRandomWord() {
  const words = ["Fnatic", "Liquid", "Misfits"];
  const randIndex = Math.floor(Math.random() * words.length);
  selectedWord = words[randIndex].toLowerCase();
}

function displayWord() {
  const letters = selectedWord.split("");
  let result = "";
  for (const el of letters) {
    result += "<span>";
    result += correctLetters.includes(el) ? el : "";
    result += "</span>";
    console.log(result);
  }
  wordEl.innerHTML = result;
}

getRandomWord();
displayWord();
