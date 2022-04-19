$(function(){
    var to_do_list;
    if(localStorage.getItem("to_do_list") === null) {
        to_do_list = [];
    } else {
        to_do_list = localStorage.getItem("to_do_list").split(",");
        to_do_list.forEach(function(item) {
            $("#to-do-list").append("<li>" + item + "</li>");
        });
    }
    
    $("#addItem").click(function() {
        var yourText = $("#yourText").val();
        $("#to-do-list").append("<li>" + yourText + "</li>");
        $("#yourText").val("");
        to_do_list.push(yourText);
        localStorage.setItem("to_do_list", to_do_list);
    });
    $("#to-do-list").on("click", "li", function() {
        $(this).fadeOut(500);
        to_do_list.splice(to_do_list.indexOf($(this).text()), 1);
        localStorage.setItem("to_do_list", to_do_list);
        if(to_do_list.length === 0) {
            localStorage.removeItem("to_do_list");
        }
    });
;});