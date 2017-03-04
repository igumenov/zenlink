$(document).ready(function(){
  $('.bxslider').bxSlider({
  minSlides: 1,
  maxSlides: 1,
  slideMargin: 10
});
$('.counter').countdown('2016/06/19', function(event) {
		$(this).html(event.strftime('<div>%H <span> :</span></div>&nbsp;<div>%M <span> :</span></div><div>%S </div>'));
	});
});