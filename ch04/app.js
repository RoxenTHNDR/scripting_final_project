
$(function(){

    function isEmail(str) {
        var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(str);
    }

    function isValidPassword(str) {
        var regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        return regex.test(str);
    }


    $("#state").click(function() {
        $("#state option").first().attr("disabled", true);
    });

    $("#register").submit((event) => {
        event.preventDefault();
        $(".error").remove();
        var numErrors = 0;

        // First name Check
        if($("#firstName").val() === "") {
            $("#firstName").after('<div class="error">First name is required</div>');
            numErrors++;
        }
        // Last name Check
        if($("#lastName").val() === "") {
            $("#lastName").after('<div class="error">Last name is required</div>');
            numErrors++;
        }
        // Age Check
        if($("#age").val() === "") {
            $("#age").after('<div class="error">Age is required</div>');
            numErrors++;
        }else{
            if ($("#age").val() <= 0){
                $("#age").after('<div class="error">Please inter a valid age</div>');
                numErrors++;
            }
        }
        // Email Check
        if($("#email").val() === "") {
            $("#email").after('<div class="error">Email address is required</div>');
            numErrors++;
        } else {
            if(!isEmail($("#email").val())) {
                $("#email").after('<div class="error">Invalid email address</div>');
            numErrors++;
            }
        }
        // Password Check
        if(!isValidPassword($("#password").val())) {
            $("#password").after('<div class="error">Minimum 8 characters, 1 letter and 1 number</div>');
            numErrors++;
        }
        //State Check
        if($("#state").val() === "") {
            $("#state").after('<div class="error">Please select your state</div>');
            numErrors++;
        }
        // Terms Check
        if(!$("#terms").is(":checked")) {
            $("#terms ~ label").after('<div class="error">Please agree to our terms</div>');
            numErrors++;
        }
        // Gender Check
        if(!$('input[name="gender"]').is(":checked")) {
            $('.boxes.radio').after('<div class="error">Please select a gender</div>');
            numErrors++;
        }
        /////////////////////////////////////////////////////////////////
        if(numErrors > 0) {
            $('input[type="submit"]').after('<div class="error">You have ' + numErrors + ((numErrors === 1) ? " error" : " errors") + '</div>');
        } else {
            var person = [];
            person.push($("#firstName").val());
            person.push($("#lastName").val());
            person.push($("#age").val());
            person.push($("#email").val());
            person.push($("#password").val());
            person.push($("#state").val());
            person.push($("#terms").is(":checked"));
            person.push($("#newsletter").is(":checked"));
            person.push($("input[name='gender']:checked").val());

            allPeople.push(person);
            localStorage.setItem("allPeople", JSON.stringify(allPeople));

            var personList = $("#people");

            $("#people").append("<tr class = \""+ person[5] + " Newsletter"+ person[7] + " " + person[8] +"\" > <td>" + person[0] + "</td> <td>" + person[1] + "</td> <td class = \"age\">" + person[2] + "</td> <td>" + person[3] + "</td> <td>" + person[4] + "</td> <td>" + person[5] + "</td> <td>" + person[6] + "</td> <td>" + person[7] + "</td> <td>" + person[8] + "</td> </tr>");

            calc_average();

            $("#person-placeholder").append(personList);
            
        }
    });

    $('.State').change(function() {
        var choice = $(this).val();
        $('tbody tr').hide();
        switch(choice) {
            case 'All':
                $('tbody tr').show();
                break;
            case 'Iowa':
                $('tbody tr.Iowa').show();
                break;
            case 'Illinois':
                $('tbody tr.Illinios').show();
                break;
            case 'Indiana':
                $('tbody tr.Indiana').show();
                break;
        }
        calc_average();
    });

    $('.Newsletter').change(function() {
        var choice = $(this).val();
        $('tbody tr').hide();
        switch(choice) {
            case 'All':
                $('tbody tr').show();
                break;
            case 'true':
                $('tbody tr.Newslettertrue').show();
                break;
            case 'false':
                $('tbody tr.Newsletterfalse').show();
                break;
        }
        calc_average();
    });

    $('.Gender').change(function() {
        var choice = $(this).val();
        $('tbody tr').hide();
        switch(choice) {
            case 'All':
                $('tbody tr').show();
                break;
            case 'Male':
                $('tbody tr.Male').show();
                break;
            case 'Female':
                $('tbody tr.Female').show();
                break;
            case 'Non-binary':
                $('tbody tr.Female').show();
                break;
            case 'Prefer-no':
                $('tbody tr.Not-provided').show();
                break;
        }
        calc_average();
    });

    var allPeople = [];

    var allPeopleFromStorage = JSON.parse(localStorage.getItem("allPeople"));
    if(allPeopleFromStorage) {
        allPeopleFromStorage.forEach((person) => {
            allPeople.push(person);
            var personList = $("#people");

            $("#people").append("<tr class = \""+ person[5] + " Newsletter"+ person[7] + " " + person[8] +"\" > <td>" + person[0] + "</td> <td>" + person[1] + "</td> <td class = \"age\">" + person[2] + "</td> <td>" + person[3] + "</td> <td>" + person[4] + "</td> <td>" + person[5] + "</td> <td>" + person[6] + "</td> <td>" + person[7] + "</td> <td>" + person[8] + "</td> </tr>")

            $("#averageAge").text(localStorage.getItem("average"));

            $("#person-placeholder").append(personList);
        });
    }

    var baseFontSize = $("body").css("font-size");
    baseFontSize = parseInt(baseFontSize); // remove the "px"

    $(".font-size-btns i:first").click(() => {
        if(baseFontSize < 42) {
            baseFontSize *= 1.1; // increase 10%
            $("main").css("font-size", baseFontSize);
        }
    });

    $(".font-size-btns i:last").click(() => {
        if(baseFontSize > 10) {
            baseFontSize /= 1.1; // decrease 10%
            $("main").css("font-size", baseFontSize);
        }
    });

    $("#dark-mode-btn input").prop("checked", false);

    $("#dark-mode-btn").on("click", "input", function() {
        if($(this).prop("checked") == true) {
            // dark mode
            $("body").removeClass("light-mode");
            $("body").addClass("dark-mode");
            $("th").removeClass("light-mode");
            $("td").removeClass("light-mode");
            $("th").addClass("dark-mode");
            $("td").addClass("dark-mode");

        } else if($(this).prop("checked") == false) {
            // light mode
            $("body").removeClass("dark-mode");
            $("body").addClass("light-mode");
            $("th").removeClass("dark-mode");
            $("td").removeClass("dark-mode");
            $("th").addClass("light-mode");
            $("td").addClass("light-mode");
        }
    });

    function calc_average() {

        var sum = 0;
        var count = 0;
        var average = 0;

        $('.age:visible').each(function(){
            sum += parseFloat($(this).text());
            count++;
            average = sum / count;
        });

        localStorage.setItem("average" , average.toFixed(2));

        $("#averageAge").text(average.toFixed(2));

    }

});