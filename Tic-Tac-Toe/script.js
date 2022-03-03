var currentPlayer; // string
var keepPlaying; // bool
var row, col; // int
var board; // array
var keepPlaying;

const ticTacToeContainer = document.getElementById("tic-tac-toe-container");
let playerIdstatment = document.getElementById("current-player");
const xs_and_os = document.getElementById("xs-and-os");

function main() {
  currentPlayer = "X";
  keepPlaying = true;
  playerIdstatment.innerHTML = currentPlayer;
  board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
}

function switchPlayer() {
  if (currentPlayer == "X") {
    currentPlayer = "O";
    playerIdstatment.innerHTML = currentPlayer;
  } else if (currentPlayer == "O") {
    currentPlayer = "X";
    playerIdstatment.innerHTML = currentPlayer;
  }
}

function getRowCol(event) {
  var x = event.offsetX;
  var y = event.offsetY;
  // Row 0
  if (x >= 0 && x <= 73 && y >= 0 && y <= 73) {
    row = 0;
    col = 0;
  } else if (x >= 77 && x <= 148 && y >= 0 && y <= 73) {
    row = 0;
    col = 1;
  } else if (x >= 152 && x <= 225 && y >= 0 && y <= 73) {
    row = 0;
    col = 2;
  }
  // row 1
  else if (x >= 0 && x <= 73 && y >= 77 && y <= 148) {
    row = 1;
    col = 0;
  } else if (x >= 77 && x <= 148 && y >= 77 && y <= 148) {
    row = 1;
    col = 1;
  } else if (x >= 152 && x <= 225 && y >= 77 && y <= 148) {
    row = 1;
    col = 2;
  }
  // row 2
  else if (x >= 0 && x <= 73 && y >= 152 && y <= 225) {
    row = 2;
    col = 0;
  } else if (x >= 77 && x <= 148 && y >= 152 && y <= 225) {
    row = 2;
    col = 1;
  } else if (x >= 152 && x <= 225 && y >= 152 && y <= 225) {
    row = 2;
    col = 2;
  } else {
    row = -1;
    col = -1;
  }
  return row, col;
}

function markBoard(row, col) {
  var marked = false;
  if (row >= 0 && col >= 0) {
    if (board[row][col] === "") {
      board[row][col] = currentPlayer;
      drawMark(row, col);
      marked = true;
    } else {
      console.log("Spot is being used");
    }
  }
  return marked;
}

function drawMark(row, col) {
  if (currentPlayer === "X") {
    const line1 = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "line"
    );
    const line2 = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "line"
    );

    //   X mark
    line1.setAttribute("x1", 15 + col * 75);
    line1.setAttribute("y1", 15 + row * 75);
    line1.setAttribute("x2", 60 + col * 75);
    line1.setAttribute("y2", 60 + row * 75);
    line2.setAttribute("x1", 60 + col * 75);
    line2.setAttribute("y1", 15 + row * 75);
    line2.setAttribute("x2", 15 + col * 75);
    line2.setAttribute("y2", 60 + row * 75);
    xs_and_os.appendChild(line1);
    xs_and_os.appendChild(line2);

    //  O mark
  } else {
    const circle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    circle.setAttribute("cx", 37.5 + col * 75);
    circle.setAttribute("cy", 37.5 + row * 75);
    circle.setAttribute("r", 25);
    xs_and_os.appendChild(circle);
  }
}

ticTacToeContainer.addEventListener("click", function (event) {
  if (keepPlaying) {
    row, col = getRowCol(event);
    marked = markBoard(row, col);
    if (marked) {
      checkWinner();
      switchPlayer();
    }
    console.log(board);
  }
});

function checkWinner() {
  var winner = false;

  var winningPlayer = "";

  // Row 0
  if (
    board[0][0] === board[0][1] &&
    board[0][1] === board[0][2] &&
    board[0][0] != ""
  ) {
    winner = true;
    winningPlayer = board[0][0];
  }
  // Row 1
  else if (
    board[1][0] === board[1][1] &&
    board[1][1] === board[1][2] &&
    board[1][0] != ""
  ) {
    winner = true;
    winningPlayer = board[1][0];
  }
  // Row 2
  else if (
    board[2][0] === board[2][1] &&
    board[2][1] === board[2][2] &&
    board[2][0] != ""
  ) {
    winner = true;
    winningPlayer = board[2][0];
  }
  // Col 0
  else if (
    board[0][2] === board[1][2] &&
    board[1][2] === board[2][2] &&
    board[0][2] != ""
  ) {
    winner = true;
    winningPlayer = board[0][2];
  }
  // Col 1
  else if (
    board[0][1] === board[1][1] &&
    board[1][1] === board[2][1] &&
    board[0][1] != ""
  ) {
    winner = true;
    winningPlayer = board[0][1];
  }
  // Col 2
  else if (
    board[0][2] === board[1][2] &&
    board[1][2] === board[2][2] &&
    board[0][2] != ""
  ) {
    winner = true;
    winningPlayer = board[0][2];
  }
  // Diag 1
  else if (
    board[0][0] === board[1][1] &&
    board[1][1] === board[2][2] &&
    board[0][0] != ""
  ) {
    winner = true;
    winningPlayer = board[0][0];
  }
  // Diag 2
  else if (
    board[0][2] === board[1][1] &&
    board[1][1] === board[2][0] &&
    board[0][2] != ""
  ) {
    winner = true;
    winningPlayer = board[0][2];
  }
  // Winner Check
  if (winner) {
    keepPlaying = false;
    console.log("Player " + winningPlayer + " has won!");
  }
}

main();
