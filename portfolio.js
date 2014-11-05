$(document).ready(function(){
	function softScrolling() {
		var $root = $('html, body');
			$('a').click(function() {
    		var href = $.attr(this, 'href');
    			$root.animate({
        		scrollTop: $(href).offset().top
    			}, 1000, function () {
        		window.location.hash = href;
    		});
    	return false;
		});
	}
	$('nav li a').click(function(e){
		e.preventDefault();
		softScrolling();
	});
	$('.arrow').click(function(e){
		e.preventDefault();
		softScrolling();
	});
	//displays portfolio overlay on mouseenter
	$('#portcont').mouseenter(function(){
		$('.overlay').fadeIn(1000);
	}).mouseleave(function() {
		$('.overlay').fadeOut(400);
	});
});