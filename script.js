
function sumAllNumbers(num){
    
    var sum = 0;

    for ( var i = 1; i <= num; i++){ 
        sum += i;
    }
    console.log(sum);
}

sumAllNumbers(parseInt(prompt("Please Enter a number: ")));