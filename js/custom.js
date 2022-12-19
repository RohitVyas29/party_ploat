$(document).ready(function(){
	$('.banner_slider').slick({
		autoplay: 3000,
		arrows:true,
		infinite: false,
		prevArrow:"<button type='button' class='slick-arrow slick-arrow-left'><i class='fa fa-angle-left left-side-arrow'></i></button>",
		nextArrow:"<button type='button' class='slick-arrow slick-arrow-right'><i class='fa fa-angle-right right-side-arrow'></i></button>"
	});
});