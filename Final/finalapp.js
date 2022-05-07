let playerName;
let playerColor;
let isSensei = false; // Whether the player is challenging sensei or not
let playerChoice; // Player's element
let noMoreInfo = false;
let wins = 0;
let opponentChoice;
let isPlaying = true;

$("#practice-button").click(function(){
    validate();
    if(noMoreInfo){
        setColor();
        $("#popup-container").css("display","none");
    }
});

$("#sensei-button").click(function(){
    validate();
    
    if(noMoreInfo){
        if(wins < 10){
            isSensei = true;
        }
        setColor();
        $("#popup-container").css("display","none");
    }
});

function validate(){
    if($("#name").val != "" && $('input[name="color"]').is(":checked")){
        playerName = $("#name").val();
        playerColor = $('input[name="color"]:checked').val();
        noMoreInfo = true;
    }
}

function setColor(){
    if(playerColor === "Red"){
        $("#player1").css("background-color","Red");
    }
    else if(playerColor === "Blue"){
        $("#player1").css("background-color","Blue");
    }
    else if (playerColor === "Black") {
        $("#player1").css("background-color","Black");
    }
}

function opponentSelect(){
    if(!isSensei){
         opponentChoice = Math.floor(Math.random() * (2 - 0 + 1) + 0);
    }
    else{
        if(playerChoice === 0){
            opponentChoice = 1;

        }
        else if(playerChoice === 1){
            opponentChoice = 2
        }
        else if(playerChoice === 2){
            opponentChoice = 0
        }
    }
    if (opponentChoice == 0){
        $("#opponentFire").css("display","flex"); 
   }
   else if (opponentChoice == 1){
       $("#opponentWater").css("display","flex");
   }
   else if (opponentChoice == 2){
       $("#opponentSnow").css("display","flex");
   }
}

//Player Choices
$("#btnFire").click(function(){
    if(isPlaying){
        isPlaying = false;
        playerChoice = 0;
        $("#playerFire").css("display","flex");
        runGame();
    }
});
$("#btnWater").click(function(){
    if(isPlaying){
        isPlaying = false;
        playerChoice = 1;
        $("#playerWater").css("display","flex");
        runGame();
    }
});
$("#btnSnow").click(function(){
    if(isPlaying){
        isPlaying = false;
        playerChoice = 2;
        $("#playerSnow").css("display","flex");
        runGame();
    } 
});

function checkWinner(){
    if(playerChoice == opponentChoice){
        $("#message").text("Round has ended in a Tie!");
    }
    else if( playerChoice == 0 && opponentChoice == 2){
        $("#message").text(playerName+ " has won!");
        wins++;
    }
    else if( playerChoice == 1 && opponentChoice == 0){
        $("#message").text(playerName+ " has won!");
        wins++;
    }
    else if( playerChoice == 2 && opponentChoice == 1){
        $("#message").text(playerName+ " has won!");
        wins++;
    }
    else{
        if(isSensei){
            $("#message").text("Sensei has won!");
        }
        else{
            $("#message").text("Opponent has won!");
        }
        $("#message").text("Opponent has won!");
    }

}

function clear(){
    $("#opponentFire").css("display","none");
    $("#opponentWater").css("display","none");
    $("#opponentSnow").css("display","none");

    $("#playerFire").css("display","none");
    $("#playerWater").css("display","none");
    $("#playerSnow").css("display","none");

    $("#popup-container").css("display","flex");

    $("#info").css("display","none");

    isPlaying = true;

}

function endGame(){
    setTimeout(clear,2000);
}

function runGame(){
    opponentSelect();
    checkWinner();
    endGame();
}
