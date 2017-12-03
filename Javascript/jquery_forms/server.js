$(document).ready(function(){

$('.form_1').submit(function(){
    console.log($(this).serialize());
    return false;
});

$('.btn').click(function(){
    $('.form_1').submit();
        $('table').append('<tr><td>' + $('input[name="first_name"]').val() + '</td><td>'
        + $('input[name="last_name"]').val() + '</td><td>'
        + $('input[name="email"]').val() + '</td><td>'
        + $('input[name="phone_num"]').val() + '</td></tr>');
    return false;
})


});