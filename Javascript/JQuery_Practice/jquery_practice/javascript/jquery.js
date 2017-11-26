
$(document).ready(function(){

    // Click Function 
    $('button.click-alert').click(function(){
        alert("You just clicked me!");
        console.log("You just clicked me!");
    });

    //Hide Function 
    $('button.click-hide').click(function(){
        $(".p-hide").hide( "slow" );
    });

    //Show Function 
    $('button.click-show').click(function(){
        $(".p-show").show( "slow" );
    });

    //Toggle Function
    $('button.click-toggle').click(function(){
        $(".p-toggle").toggle();
    });

    //Slide-Down Function
    $("button.click-slideDown").click(function () {
        if ( $( "#boxes:first" ).is( ":hidden" ) ) {
            $( "#boxes" ).slideDown( "slow" );
        } else {
            $( "#boxes" ).hide();
        }
    });

     //Slide-Up Function
        $("button.click-slideUp").click(function() {
        if ( $( "#boxesUp:first" ).is( ":hidden" ) ) {
            $( "#boxesUp" ).show( "slow" );
        } else {
            $( "#boxesUp" ).slideUp();
        }
    });

    //Slide Toggle Function
    $('button.click-slideToggle').click(function(){
        $(".p-slideToggle").slideToggle();
    });

    //FadeIn Function
    $( "button.click-fadeIn" ).click(function() {
        $( "div#censor" ).fadeIn( 3000, function() {
            $( "span#censor" ).fadeIn( 100 );
        });
        return false;
    });

    //FadeOut Function 
    $( "button.click-fadeOut" ).click(function() {
        $( ".p-fadeOut" ).fadeOut( "slow" );
    });

    //AddClass Function
    $( ".p-addClass" ).last().addClass( "selected" ); 

    //Before Function 
    $(".p-before").before( "<b>Hello</b>" );

    //After Function 
    $(".p-after").after( "<b>Hello</b>" );

    //Append Function
    $( ".p-append" ).append( "<strong>sentence</strong>" );

    //HTML Function 
    $( ".p-html" ).html( "<span class='red'>Hello <b>Again</b></span>" );      

});
