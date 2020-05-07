jQuery(document).ready(function($){
    $('#prepend').on('submit' , function(event){
        event.preventDefault();

        var textToAddUsername = document.getElementById("Username-input").value;

        if(textToAddUsername == "") {
            alert("You must add a Username");
            return false;
        }

        $("#tasks").prepend(textToAddUsername);

        });    

});
