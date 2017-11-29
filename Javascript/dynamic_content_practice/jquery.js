
// Callback Example
function attach_handlers(){

    $('.alert').click(function(){
        console.log('you clicked me!');
    });

}

$(document).ready(function(){

    attach_handlers();

    $('.new_btn').click(function() {
        $('#buttons').append("<button class='alert'>I am a dynamically generated button!</button>");
        attach_handlers();
    });

    // $(document).on('click', '.alert', function(){
    //     console.log('You clicked the button!');
    // }


});