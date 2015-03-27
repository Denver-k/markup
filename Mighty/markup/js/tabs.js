$(document).ready(function(){
	$('.tabset ul.tab-control li a').on('click', function(){
		var thisHold = $(this).closest(".tabset");
		var tClass = $(this).attr("href").split('/');
		tClass = tClass[tClass.length -1];
		thisHold.children(".tab").hide();
		thisHold.children("div."+tClass).show();
		$(this).parents("ul").find("li.active").removeClass("active");
		$(this).closest('li').addClass("active");
		return false;
	});
});