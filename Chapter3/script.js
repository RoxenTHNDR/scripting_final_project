var startBtn = document.getElementById('start');

startBtn.addEventListener('click', function() {
    var count = 0; // count of how many numbers are inputed
    var total = 0; // the sum of all the numbers inputed
    var keepInputing = true; // boolean for the while loop
    var regex = /^[0-9]+$/; // regular expression to test for numbers and not letters or punctuation/special characters

    while (keepInputing){
        var input = prompt("Please insert a number, or if you would like to quite insert \"Q\":")

        if (input === "Q" || input === "q"){
            // Ending the loop when the user wants to quit
            keepInputing = false;
            break;
        }
        else if (input === "" || input === " "){
            // Making sure the user actually inputs something
            console.log("Invalid Input: Please insert a number, or if you would like to quite insert \"Q\"");
        }
        else if (input === null){
            // The window will give a null value if the prompt window is closed before the user quits with "Q" so this handles that
            console.log("Apologies, it seems you tried to close the prompt to soon!")
        }
        else if (!input.match(regex)){
            // Test if the number is actually a number
            console.log("Invalid Input: Please insert a number, or if you would like to quite insert \"Q\"");
        }
        else{
            // Combining the total and retrieving the count of times the user inputs a number
            total += parseFloat(input);
            count += 1;
        }
        
    }
    var average = getAverage(count,total);
    
    console.log("Input Complete"); // Identifying that the user has ended the loop
    
    // OUTPUTS
    if (count == 1){
        console.log("You had a total of " + count + " number input."); // Grammar check if the count is only one
    }
    else{
        console.log("You had a total of " + count + " number inputs."); // Grammar check (See line 42 comment)
    }
    console.log("The average of your number inputs is " + average);

});

// Function of achieving the average
function getAverage(count, total){
    var average = total / count || 0;
    return average;
}