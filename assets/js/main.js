
$(document).ready(function(){

	//nav cambia de color cuando se baja la página
	$(document).scroll(function(){
		if ($(this).scrollTop() > 90){
			$(".header .cont-opacity nav").addClass("nav-scroll");
		} else if ($(this).scrollTop() <= 90){
			$(".header .cont-opacity nav").removeClass("nav-scroll");
		}
	});

	//smoth scrolling
	$('a[href*="#"]:not([href="#"])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	    	var target = $(this.hash);
	    	target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	    	if (target.length) {
		        $('html, body').animate({
		        	scrollTop: target.offset().top
		        }, 1000);
		        return false;
	    	}
	    }
	});

	// ABOUT ME
	$('.carousel').carousel();

})