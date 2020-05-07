jQuery(document).ready(function($){
    $('#prepend').on('click',function(event){
        var textInput = document.getElementById("Username-input").value;
        if(textInput == "") {
            alert("Text area empty. Please add text.");
            return false;
        }
        $("#tasks").prepend("Your Username is: "  + textInput);
        });    
});