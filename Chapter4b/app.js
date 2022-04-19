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
        if($("#firstName").val() === "") {
            $("#firstName").after('<div class="error">First name is required</div>');
            numErrors++;
        }

        if($("#lastName").val() === "") {
            $("#lastName").after('<div class="error">Last name is required</div>');
            numErrors++;
        }

        if($("#email").val() === "") {
            $("#email").after('<div class="error">Email address is required</div>');
            numErrors++;
        } else {
            if(!isEmail($("#email").val())) {
                $("#email").after('<div class="error">Invalid email address</div>');
            numErrors++;
            }
        }

        if(!isValidPassword($("#password").val())) {
            $("#password").after('<div class="error">Minimum 8 characters, 1 letter and 1 number</div>');
            numErrors++;
        }

        if($("#state").val() === "") {
            $("#state").after('<div class="error">Please select your state</div>');
            numErrors++;
        }

        if(!$("#terms").is(":checked")) {
            $("#terms ~ label").after('<div class="error">Please agree to our terms</div>');
            numErrors++;
        }

        if(!$('input[name="gender"]').is(":checked")) {
            $('.boxes.radio').after('<div class="error">Please select a gender</div>');
            numErrors++;
        }

        if(numErrors > 0) {
            $('input[type="submit"]').after('<div class="error">You have ' + numErrors + ((numErrors === 1) ? " error" : " errors") + '</div>');
        } else {
            var person = [];
            person.push($("#firstName").val());
            person.push($("#lastName").val());
            person.push($("#email").val());
            person.push($("#password").val());
            person.push($("#state").val());
            person.push($("#terms").is(":checked"));
            person.push($("#newsletter").is(":checked"));
            person.push($("input[name='gender']:checked").val());
            allPeople.push(person);
            localStorage.setItem("allPeople", JSON.stringify(allPeople));

            var personList = $('<ul class="person"></ul>');
            personList.append(`<li>First Name: ${$("#firstName").val()}</li>`);
            personList.append(`<li>Last Name: ${$("#lastName").val()}</li>`);
            personList.append(`<li>Email: ${$("#email").val()}</li>`);
            personList.append(`<li>Password: ${$("#password").val()}</li>`);
            personList.append(`<li>State: ${$("#state").val()}</li>`);
            personList.append(`<li>Agreed to Terms: ${$("#terms").is(":checked")}</li>`);
            personList.append(`<li>Newsletter Signup: ${$("#newsletter").is(":checked")}</li>`);
            personList.append(`<li>Gender: ${$("input[name='gender']:checked").val()}</li>`);
            $("#person-placeholder").append(personList);
            
        }
    });

    var allPeople = [];

    var allPeopleFromStorage = JSON.parse(localStorage.getItem("allPeople"));
    allPeopleFromStorage.forEach((person) => {
        allPeople.push(person);
        var personList = $('<ul class="person"></ul>');
        personList.append(`<li>First Name: ${person[0]}</li>`);
        personList.append(`<li>Last Name: ${person[1]}</li>`);
        personList.append(`<li>Email: ${person[2]}</li>`);
        personList.append(`<li>Password: ${person[3]}</li>`);
        personList.append(`<li>State: ${person[4]}</li>`);
        personList.append(`<li>Agreed to Terms: ${person[5]}</li>`);
        personList.append(`<li>Newsletter Signup: ${person[6]}</li>`);
        personList.append(`<li>Gender: ${person[7]}</li>`);
        $("#person-placeholder").append(personList);
    });

});