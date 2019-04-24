$(document).ready(function () {
  $('.click').click(function () {
    alert('Button was clicked!')
  })

  $('.h1dden').click(function () {
    $('p.h1dden').hide()
  })

  $('.sh0w').click(function () {
    $('p.sh0w').show('slow')
  })

  $('.t0ggle').click(function () {
    $('p.t0ggle').toggle()
  })

  $('.slideDown').click(function () {
    $('div.slideDown').slideDown('slow')
  })

  $('.slideUp').click(function () {
    $('div.slideUp').slideUp('slow')
  })

  $('.slideToggle').click(function () {
    $('p.slideToggle').slideToggle('slow')
  })

  $('.fadeIn').click(function () {
    $('p.fadeIn').fadeIn()
  })

  $('.fadeOut').click(function () {
    $('p.fadeOut').fadeOut()
  })

  $('.addClass').click(function () {
    $('p.addClass').addClass('red')
  })

  $('.before').click(function () {
    $('p.before').before('<b>Before</b>')
  })

  $('.after').click(function () {
    $('p.after').after('<b>After</b>')
  })

  $('.append').click(function () {
    $('p.append').append($('<strong>I was Appended</strong>'))
  })

  $('.html').click(function () {
    $('p.html').html("<b>Wow!</b> I've been changed!")
  })

  $('.attr').click(function () {
    $('p.attr').attr('class', 'red')
  })

  $('.input').keyup(function () {
    var value = $(this).val()
    $('p.input').text(value)
  })

  $('.text').click(function () {
    $('p.text').text('I just got changed!')
  })
})
