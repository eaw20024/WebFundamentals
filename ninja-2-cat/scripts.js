$(document).ready(function () {
  $('img').click(function () {
    $(this).attr('src', $(this).attr('alt-src'))
    $(this).attr('alt-src', $(this).attr('src'))
  })
})
