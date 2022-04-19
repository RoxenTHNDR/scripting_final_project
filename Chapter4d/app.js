$(function() {
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
        } else if($(this).prop("checked") == false) {
            // light mode
            $("body").removeClass("dark-mode");
            $("body").addClass("light-mode");
        }
    });

});
