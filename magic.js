$( document ).ready(function() {
  $('#output-image').hide();
  $('#submit').click(roboTime);

  function roboTime() {
    let userQuery = $('[name="input-box"]').val();
    let url = 'https://robohash.org/' + userQuery + '?set=set3&size=350x350&ignoreext=bitmap';

    $('#output-image').attr('src', url);
    $('#output-image').show();
    $('img').css('animation-play-state', 'running');
  }

});
