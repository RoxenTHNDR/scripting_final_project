var ballPlacement; // array to know where the ball is
var isPlaying; // Boolean
var tries; // User Has 2 tries to guess
var userChoice; // tells the program what cup the user chose




$("#play-button").click(function () {
    console.log("Hello");
    main();
    setGameUp();
    $("#game-text").text("Guess which cup the ball is under!");
    console.log(ballPlacement);
});

$("#game-container").click(function(event){
    var click = event.offsetX;
    if(isPlaying){
        if (click <= 152) {
            $("#cup0").removeClass("start");
            userChoice = 0;

        }
        else if (click >= 153 && click <= 284) {
            $("#cup1").removeClass("start");
            userChoice = 1;
        }

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
    var random = Math.floor(Math.random() * (2 - 0 + 1) + 0);
    ballPlacement[random] = "x";
    return ballPlacement;
}

function moveBall(ballPlacement) {
    if (ballPlacement[0] === "x") {
        $("#ball").attr("cx","76")
    }
    else if (ballPlacement[1] === "x") {
        $("#ball").attr("cx","208")
    }
    else if (ballPlacement[2] === "x") {
        $("#ball").attr("cx","340")
    }
}

function setGameUp() {
    $("#cup0").addClass("start");
    $("#cup1").addClass("start");
    $("#cup2").addClass("start");
    $("#play-button").addClass("began")
    randomBall();
    moveBall(ballPlacement);
}

function checkGuess(ballPlacement,userChoice){
    if (ballPlacement[userChoice] == "x"){
        gameWin();
    }
    else if (ballPlacement[userChoice] != "x" && tries == 2){
        tries -= 1;
        $("#game-text").text("Uh oh! Try Again!");
    }
    else{
        tries -=1;
        isPlaying = false;
        gameLose();
    }
}

function gameWin(){
    $("#game-text").text("Congrats! You guessed correctly! Hit \"Play Again\" if you would like to play again.");
    $("#play-button").text("Play Again");
    $("#play-button").removeClass("began");
}

function gameLose(){
    $("#cup0").removeClass("start");
    $("#cup1").removeClass("start");
    $("#cup2").removeClass("start");
    $("#game-text").text("Oh no! You ran out of tries! Hit \"Play\" if you would like to play again.");
    $("#play-button").text("Play Again");
    $("#play-button").removeClass("began");
}


