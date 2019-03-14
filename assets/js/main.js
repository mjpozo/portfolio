
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

	//  OVERLAY PORTAFOLIO
	proyect.forEach(function(element){
		$("#" + element.id).append('<div class="overlay"><div class="text"><span class="title">' + element.title + '</span><ul><li><a  data-toggle="modal" href="#modal-' + element.id + '" id="desc-"' + element.id + '><i class="fa fa-file-text-o" aria-hidden="true" data-toggle="tooltip" data-placement="bottom" title="Descripción"></i></a></li><li><a href="' + element.code + '" target="_blank"><i class="fa fa-code" aria-hidden="true" data-toggle="tooltip" data-placement="bottom" title="Código"></i></a></li><li><a href="' + element.url + '" target="_blank"><i class="fa fa-github" aria-hidden="true" data-toggle="tooltip" data-placement="bottom" title="Visualización"></i></a></li></ul></div></div>');

		$(".contenedor-modal").append('<div class="modal fade" id="modal-' + element.id + '" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true"><div class="modal-dialog  modal-dialog-centered" role="document"><div class="modal-content"><div class="modal-header"><h4 class="modal-title" id="modalLabel">' + element.title + '</h4><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body"><div class="row"><div class="col-sm-12 col-md-6 col-lg-6 col-xl-6"><div class="imgmod" id="imgmod_' + element.id + '"></div></div><div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">' + element.description + '</div></div><div class="row"><div class="cont-btn" style="margin: 30px auto;"><button type="button" class="btn btn-primary"><a href="' + element.code + '" target="_blank"><i class="fa fa-code" aria-hidden="true" data-toggle="tooltip" data-placement="bottom" title="Código"></i></a></button><button type="button" class="btn btn-primary"><a href="' + element.url + '" target="_blank"><i class="fa fa-github" aria-hidden="true" data-toggle="tooltip" data-placement="bottom" title="Visualización"></i></a></button></div></div></div></div></div></div>');

		//<img src="../../dist/img/portfolio/' + element.img + '" style="width: 100%;">
		
		/*$(".contenedor-modal").append('<div id="modal-' + element.id + '" class="modal"><div class="modal-content"><h4>' + element.title + '</h4><div class="row"><div class="col-sm-12 col-md-6 col-lg-6 col-xl-6 text-center"><img src="../../dist/img/portfolio/' + element.img + '" class="responsive-img"></div><div class="col-sm-12 col-md-6 col-lg-6 col-xl-6"><p>' + element.description + '</p></div></div><div class="row"><div class="col-sm-6 col-md-6 col-lg-6 col-xl-6"><a href="' + element.code + '" class="waves-effect waves-light modal-close btn right" target="_blank"><i class="fa fa-code" aria-hidden="true"></i></a></div><div class="col-sm-6 col-md-6 col-lg-6 col-xl-6"><a href="' + element.url + '" class="waves-effect waves-light modal-close btn" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a></div></div></div><div class="modal-footer"><a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">Cerrar</a></div></div>');*/
	});

	
	//  INICIALIZAR TOOLTIP
  	$('[data-toggle="tooltip"]').tooltip();


	//  INICIALIZAR MODAL
	//$('.modal').modal();

})