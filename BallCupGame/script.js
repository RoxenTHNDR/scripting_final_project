var ballPlacement; // array to know where the ball is
var isPlaying; // Boolean
var tries; // User Has 2 tries to guess
var userChoice; // tells the program what cup the user chose




$("#play-button").click(function () {

    // Start of Game

    main();
    setGameUp();
    $("#game-text").text("Guess which cup the ball is under!");
});

$("#game-container").click(function(event){
    var click = event.offsetX;
    if(isPlaying){

        // Check if Cup 0
        if (click <= 152) {
            $("#cup0").removeClass("start");
            userChoice = 0;

        }

        // Check if Cup 1
        else if (click >= 153 && click <= 284) {
            $("#cup1").removeClass("start");
            userChoice = 1;
        }

        // Check if Cup 2
        else if (click >= 285){
            $("#cup2").removeClass("start");
            userChoice = 2;
        }
        checkGuess(ballPlacement,userChoice);
    }
});

function main() {
    tries = 2;
    isPlaying = true;
    ballPlacement = ["", "", ""];
}


function randomBall() {

    // Sets up an array to test where the ball is placed.

    var random = Math.floor(Math.random() * (2 - 0 + 1) + 0);
    ballPlacement[random] = "x";
    return ballPlacement;
}

function moveBall(ballPlacement) {

    // Moves the ball underneith the corresponding cup

    //places the ball under cup 0
    if (ballPlacement[0] === "x") {
        $("#ball").attr("cx","76")
    }

    //places the ball under cup 1
    else if (ballPlacement[1] === "x") {
        $("#ball").attr("cx","208")
    }

    //places the ball under cup 2
    else if (ballPlacement[2] === "x") {
        $("#ball").attr("cx","340")
    }
}

function setGameUp() {

    // Sets the game into starting positions

    // Moves the cups down so they are ontop of the ball
    $("#cup0").addClass("start");
    $("#cup1").addClass("start");
    $("#cup2").addClass("start");

    // Removes teh play button
    $("#play-button").addClass("began")
    
    randomBall();
    moveBall(ballPlacement);
}

function checkGuess(ballPlacement,userChoice){

    // Checks if the user's choice is correct

    // If the user guesses correctly it will run the gameWin function and end the game
    if (ballPlacement[userChoice] == "x"){
        gameWin();
    }
    else if (ballPlacement[userChoice] != "x" && tries == 2){
        tries -= 1;
        $("#game-text").text("Uh oh! Try Again!");
    }

    // If the user is out of tries it will run the gameLose function and end the game
    else{
        tries -=1;
        isPlaying = false;
        gameLose();
    }
}

function gameWin(){

    // Changes the description test to a message letting the user know they have won, 
    // and displays the play button which has been renamed to "Play Again"

    $("#game-text").text("Congrats! You guessed correctly! Hit \"Play Again\" if you would like to play again.");
    $("#play-button").text("Play Again");
    $("#play-button").removeClass("began");
}

function gameLose(){

    // Lifts all the cups to the starting position to reveal where the ball was,
    // Changes the description text to a message letting the user know they have lost,
    // and displays the play button which has been renamed to "Play Again"

    $("#cup0").removeClass("start");
    $("#cup1").removeClass("start");
    $("#cup2").removeClass("start");
    $("#game-text").text("Oh no! You ran out of tries! Hit \"Play\" if you would like to play again.");
    $("#play-button").text("Play Again");
    $("#play-button").removeClass("began");
}


