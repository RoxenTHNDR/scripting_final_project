$(function(){
    $("#en").click(function() {
        $("h1").text("Hello!");
        $("#en").text("English");
        $("#es").text("Spanish");
        $("#fr").text("French");
    });
    $("#es").click(function() {
        $("h1").text("¡Hola!");
        $("#en").text("inglés");
        $("#es").text("español");
        $("#fr").text("francés");
    });
    $("#fr").click(function() {
        $("h1").text("Bonjour!");
        $("#en").text("anglais");
        $("#es").text("espagnol");
        $("#fr").text("français");
    });
});