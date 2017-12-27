$(document).ready(function(){
    for (var i = 0; i < 151; i++){
        $('.pokemon_div').append(`<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${i}.png">`);
    }
})