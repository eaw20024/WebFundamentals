$(document).ready(function(){

    //Hiding the Boxes
    $('div.box').click(function(){
        $(this).hide();
    });

    //Restoring the Boxes
    $('button').click(function(){
        $('div.box').show();
    });
});