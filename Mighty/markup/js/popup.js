$(document).ready(function(){
	popupbg();
	$('.login a').click(function(){
		popupbg();
		$('.popup-holder').css({"left": "-9999px"});
		$('.popup-holder').show();
		windowScroll($('.popup-holder .popup').outerHeight());
		$('.popup-holder').hide();
		$('.popup-holder').css({"left": "0"});
		$('.popup-holder .popup').css('top',wScroll);
		$('.popup-holder').fadeIn(300);
		return false;
	});
	$('.popup-holder .btn-close, .popup-holder .bg').click(function(){
		$(this).parents('.popup-holder').fadeOut(300, function(){
			$('.popup-holder').css({"left": "-9999px"});
			$('.popup-holder').height(0);
			$('.popup-holder').show();
		});
		return false;
	});
});
function popupbg(){
	if ($(window).height() < $("#wrapper").height()) {
		$(".popup-holder").css("height",$("#wrapper").height());
	} else {
		$(".popup-holder").css("height",$(window).height());
	}
}
function windowScroll(heightPopup){
	if ((($(window).height() - heightPopup)/2) > 0){
	wScroll = $(window).scrollTop() + (($(window).height() - heightPopup)/2);
	} else {
		wScroll = $(window).scrollTop() + 25;
	}
	if(($(".popup-holder").height()-wScroll-heightPopup) < 0){
		$(".popup-holder").height(wScroll+heightPopup + 20);
	}
}