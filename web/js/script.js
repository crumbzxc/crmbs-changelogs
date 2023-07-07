$(document).ready(function (){
  document.onkeyup = function(data) {
    if (data.which == 27) {
      $.post('http://crmbs-changelogs/Close', JSON.stringify({}));
      $('.changelogs-container').fadeOut(200)
    }
  }, window.addEventListener('message', function (event) {
      var action = event.data.action;
      if (action == 'changelogs') {
        $('.changelogs-container').show()
      }
  });
});