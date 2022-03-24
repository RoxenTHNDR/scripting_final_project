var startBtn = document.getElementById('start');

startBtn.addEventListener('click', function() {
    var count = 0; // count of how many numbers are inputed
    var total = 0; // the sum of all the numbers inputed
    var keepInputing = true; // boolean for the while loop
    var regex = /^[0-9]+$/;

    while (keepInputing){
        var input = prompt("Please insert a number, or if you would like to quite insert \"Q\":")

        if (input === "Q" || input === "q"){
            keepInputing = false;
            break;
        }
        else if (input === "" || input === " "){
            console.log("Invalid Input: Please insert a number, or if you would like to quite insert \"Q\"");
        }
        else if (input === null){
            console.log("Apologies, it seems you tried to close the prompt to soon!")
        }
        else if (!input.match(regex)){
            console.log("Invalid Input: Please insert a number, or if you would like to quite insert \"Q\"");
        }
        else{
            total += parseFloat(input);
            count += 1;
        }
        
    }
    var average = getAverage(count,total);
    
    console.log("Input Complete");
    if (count == 1){
        console.log("You had a total of " + count + " number input.");
    }
    else{
        console.log("You had a total of " + count + " number inputs.");
    }
    console.log("The average of your number inputs is " + average);

});

// Function of achieving the average
function getAverage(count, total){
    var average = total / count || 0;
    return average;
}