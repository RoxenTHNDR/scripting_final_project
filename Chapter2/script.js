// Part 1

    // Step 1: In the JavaScript file, create an array that contains two state names: "Iowa" and "Missouri".
        var states = ["Iowa", "Missiouri"];

    // Step 2: Print each individual element using console.log(). Two strings should print.
        console.log(states[0]);
        console.log(states[1]);

    // Step 3: Add a third state name of your choice using push().
        states.push("Minnesota");

    // Step 4: Print each individual element using console.log(). Three strings should print.
        console.log(states[2]);

    // Step 5: Remove "Iowa" from the array.
        states.splice(0, 1);

    // Eye candy for console
        console.log("\n");

    // Step 6: Print each individual element using console.log(). Two strings should print.
        for (let i = 0; i < states.length; i++) {
            console.log(states[i]);
            };
    // Step 7: Change "Missouri" to a different state of your choice.
        states.splice(0, 1, "Colorado");

    // Eye candy for console
    console.log("\n");

    // Step 8: Print each individual element using console.log(). Two strings should print.
        for (let i = 0; i < states.length; i++) {
            console.log(states[i]);
            };

// Part 2

    // Eye candy for console
    console.log("\n\n");

    
    // Step 1: In the same JavaScript file, create a multidimensional array that contains two sub-arrays, each representing a 
    //         single state with the following information:
    //         State Name (like "Iowa" or "Missouri")
    //         Year Admitted to the Union (like 1846 or 1821)
        var uniondate = [
            ["Iowa", 1846],
            ["Missouri", 1821]
        ];
    // Step 2: Print each individual element using console.log(). Two strings and two numbers should print.
        for(let i = 0; i < uniondate.length; i++) {
            for(let j = 0; j < uniondate[i].length; j++) {
                console.log(uniondate[i][j]);
            };
        };
    // Step 3: Add a third state of your choice using unshift().
        uniondate.unshift(
            ["Colorado" , 1876 ]
        );

    // Eye candy for console
        console.log("\n");

    // Step 4: Print each individual element using console.log(). Two strings and two numbers should print.
        for(let i = 0; i < uniondate.length; i++) {
            for(let j = 0; j < uniondate[i].length; j++) {
                console.log(uniondate[i][j]);
            }
        };
    
    // Step 5:Remove the "Iowa" sub-array from the array.
        uniondate.splice(1,1)
    
    // Eye candy for console
        console.log("\n");

    // Step 6: Print each individual element using console.log(). Two strings and two numbers should print.
        for(let i = 0; i < uniondate.length; i++) {
            for(let j = 0; j < uniondate[i].length; j++) {
                console.log(uniondate[i][j]);
            }
        };

    //Step 7: Change the "Missouri" sub-array to a different state of your choice.
        uniondate.splice(1,1,["Arizona",1912])

    // Eye candy for console
    console.log("\n");

    // Step 8: Print each individual element using console.log(). Two strings and two numbers should print.
        for(let i = 0; i < uniondate.length; i++) {
            for(let j = 0; j < uniondate[i].length; j++) {
                console.log(uniondate[i][j]);
            }
        };



// Part 3

    // Eye candy for console
        console.log("\n\n");
    
    // Step 1: Create a JavaScript object representing the state of Iowa. Include at least the following properties. 
    //          Use Wikipedia: https://en.wikipedia.org/wiki/Iowa to get the values:
    //          name (a string)
    //          population (a whole number)
    //          areaSquareMiles (a decimal number)
        var iowa = {
            name: "Iowa",
            population: 3190369,
            area: 55857.1,
        };
    // Step 2: Print the following message using console.log(). Replace "57.1" with a mathematical expression
    //         using 1 decimal place.
    //         "Iowa's population density is 57.1 people per square mile.""
        var density = iowa.population/iowa.area;
        console.log(iowa.name + "'s population density is " + density.toFixed(1) + " people per square mile.");

    
    