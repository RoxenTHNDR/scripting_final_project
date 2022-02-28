var currentPlayer; // string
var keepPlaying; // bool

const ticTacToeContainer = document.getElementById("game-container");
let playerIdstatment = document.getElementById("player-statment");

function main(){
          currentPlayer = "X";
          keepPlaying = true;
          playerIdstatment.innerHTML = "Player " + currentPlayer + ", Choose a box";
}

ticTacToeContainer.addEventListener("click",function(){
    console.log('You clicked me');
    if (currentPlayer == "X"){
        currentPlayer = "O";
        playerIdstatment.innerHTML = "Player " + currentPlayer + ", Choose a box";
    }
    else if (currentPlayer == "O"){
        currentPlayer = "X";
        playerIdstatment.innerHTML = "Player " + currentPlayer + ", Choose a box";
    }
});

main();