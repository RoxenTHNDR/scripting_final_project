let selectedWord;

const wrongLettersEl = document.getElementById("wrong-letters-container");
const wordEl = document.getElementById("word-container");
const popup = document.getElementById("popup-container");
const notification = document.getElementById("notification-container");
const finalMessage = document.getElementById("final-message");
const playAgainBtn = document.getElementById("play-button");
const figure_parts = document.querySelectorAll(".figure-parts");

let gamePlaying = true;

const correctLetters = [];
const wrongLetters = [];

const letter_previously_entered = document.getElementById(
  "letter_previously_entered"
);

function updateWrongLetters() {
  //wrongLetters.sort();
  let result = wrongLetters.length > 0 ? '<p>Wrong Letters:</p>' : '';
  for (const letter of wrongLetters) {
    result += "<span>" + letter + "</span>";
  }
  result = result.replaceAll("</span><span>", "</span>, <span>");
  wrongLettersEl.innerHTML = result;
  figure_parts.forEach(function (part, index) {
    if (index < wrongLetters.length) {
      part.style.display = "block";
    } else {
      part.style.display = "none";
    }
  });

  if (wrongLetters.length == figure_parts.length) {
    gamePlaying = false;
    finalMessage.innerHTML = "Emotional Damage😔";
    popup.style.display = "flex";
  }
}

function shownotification(letter) {
  letter_previously_entered.textContent = letter;
  notification.classList.add("show");
  setTimeout(function () {
    notification.classList.remove("show");
  }, 2000);
}

window.addEventListener("keydown", function (event) {
  if (gamePlaying) {
    const keyPress = event.key;
    if (keyPress.match(/^[a-z]/g)) {
      if (selectedWord.includes(keyPress)) {
        if (!correctLetters.includes(keyPress)) {
          //First time I Have hit the key
          correctLetters.push(keyPress);
          console.log("Correct " + correctLetters);
          displayWord();
        } else {
          shownotification(keyPress);
          console.log("Correct " + correctLetters);
        }
      } else {
        if (!wrongLetters.includes(keyPress)) {
          //First time I Have hit the key
          wrongLetters.push(keyPress);
          updateWrongLetters();
        } else {
          shownotification(keyPress);
          console.log("InCorrect " + wrongLetters);
        }
      }
    }
  }
});

playAgainBtn.addEventListener("click", function(){
  gamePlaying = true;
  correctLetters.splice(0);
  wrongLetters.splice(0);
  updateWrongLetters();
  getRandomWord();
  displayWord();
  popup.style.display = "none";
});

function getRandomWord() {
  const words = ["Fnatic", "Liquid", "Misfits"];
  const randIndex = Math.floor(Math.random() * words.length);
  selectedWord = words[randIndex].toLowerCase();
}

function displayWord() {
  const letters = selectedWord.split("");
  let result = "";
  for (const letter of letters) {
    result += "<span>";
    if (correctLetters.includes(letter)) {
      result += letter;
    }
    result += "</span>";
    console.log(result);
  }
  wordEl.innerHTML = result;

  const innerLetters = wordEl.innerText.replace(/\n/g, "");

  if (innerLetters == selectedWord) {
    gamePlaying = false;
    finalMessage.innerHTML = "🎉Congrats! You WON!!🎉";
    popup.style.display = "flex";
  }
}

getRandomWord();
displayWord();
