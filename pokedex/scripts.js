function capitalize (string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
for (var i = 1; i < 152; i++) {
  $('#pokedex').append(
    `<img class="pokeEntry" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png" alt="pokemon ${i}" width="75px" id="${i}"/>`
  )
}
$('.pokeEntry').click(function () {
  $.get(
    `https://pokeapi.co/api/v2/pokemon/${this.id}`,
    function (data) {
      console.log(data)
      $('#pokemodal').css('display', 'block')
      var s = `<h1>Pokemon: ${capitalize(data.name)}</h1>`
      s += `<img src="${data.sprites.front_shiny}" alt="${data.name}"/>`
      s += `<img src="${data.sprites.back_shiny}" alt="${data.name}"/>`
      s += `<ul>`
      for (var i = 0; i < data.stats.length; i++) {
        s += `<li class="pokestats">${data.stats[i].stat.name}: ${
          data.stats[i].base_stat
        }</li>`
      }
      s += `<br>`
      s += `<h2> PokeMoves</h2>`
      for (var i = 0; i < 4; i++) {
        var movesNum = Math.floor(Math.random() * data.moves.length)
        console.log(movesNum)
        s += `<li class="pokemoves">${data.moves[movesNum].move.name}`
      }
      s += '</ul>'
      $('#pokedetails').html(s)
    },
    'json'
  )
})
$('#close').click(function () {
  $('#pokemodal').css('display', 'none')
})
