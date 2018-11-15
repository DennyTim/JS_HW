$(document).ready(function(){
	$('body').append('<button id="goTo"><a href="#" class="goBtn">&#x2191;</a></button>');

	$(window).scroll( function() {
	   ($(window).scrollTop() >= 350) ? ($("#goTo").show()) : ($("#goTo").hide());
	});

	$("#menu").on("click", "a", function(e) {
		e.preventDefault();
		//console.log($(this)[0].attributes);				//проверка свойств обьекта jquery
		let id = $(this).attr('href');
		let top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 700);
		$("#goTo").show();
	});

	$("#goTo").on("click", function(e){
		e.preventDefault();
		$('body,html').animate({scrollTop: 0}, 700);
		$(this).hide();
	})

	//
	
	$("#faceIcons").children().hide();
	$("#btnSlideToggle").click(function(){
		$("#faceIcons").children().slideToggle();
	})

});






