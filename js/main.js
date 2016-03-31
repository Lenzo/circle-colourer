var $circle = $('.circle');
var $form = $('form');
var $color = $('#color');
var $size = $('#size');

$form.on('change', function() {
  $circle.css('background-color', $color.val());

  $circle.css('width', $size.val());
  $circle.css('height', $size.val());

  $circle.css('')
});

