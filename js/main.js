var $circle = $('.circle');
var $form = $('form');
var $color = $('#color');
var $size = $('#size');
var $newCircle = $('.new-circle');

// var $shape-square = $('[value="square"]:checked');
// var $shape-cirlce = $('#circle')


$form.on('change', function() {
  $circle.css('background-color', $color.val());

  $circle.css('width', $size.val());
  $circle.css('height', $size.val());
});

$newCircle.on('click', function (){
  
}); 


// if ($shape-square) {
//   $cirlce.css('border-radius', 0);
// };

