(function($) {
	$(window).load(function() {
		// Preloader
		$('.loader').fadeOut();
		$('.loader-mask').delay(350).fadeOut('slow');
		$(window).trigger("resize");
	  });
	window.onscroll = function() {myFunction()};

	var navbar = document.getElementById("navbar");
	var sticky = navbar.offsetTop;

	function myFunction() {
		if (window.pageYOffset > sticky) {
			navbar.classList.add("sticky");
			
		} else {
			navbar.classList.remove("sticky");	
		}
	}
	$('.nav_right').hover(function(){
		$('.cart_menu').fadeIn(400);
		$('.cart_menu').css("top","34px");
	}, function () {
		$('.cart_menu').fadeOut(300);
	});
	$('.nav_left').hover(function(){
		if(!$(this).hasClass('visible-xs')){
			$('.cat_mega_menu').fadeIn(400);
			$('.cat_mega_menu').css("top","57px");
			$('.cat_mega_menu').css("z-index","101");
		}
		
	}, function () {
		if(!$(this).hasClass('visible-xs')){
		$('.cat_mega_menu').fadeOut(300);
		}
    });

	$( ".nav_left i" ).click(function() {
		$('.cat_mega_menu').addClass('visible-xs');
	});
	$( "#openNav" ).click(function() {
		$('#mySidenav').addClass('open');
		$('body').addClass('open-bg');
	  });
	$( "#closeNav" ).click(function() {
		$('#mySidenav').removeClass('open');
		$('body').removeClass('open-bg');
	});
	$( ".header_left span" ).click(function() {
		$(this).hide();
		$(".header_left a").removeClass('hidden-md');
		$(".header_left a").removeClass('hidden-lg');
		$(".header_left a").addClass('visible-md');
		$(".header_left a").addClass('visible-lg');
		$('.header_left a').css({"float": "left"});
		$('.header_left input[type="text"]').css({"width": "78%", "opacity": "1"});
	});
	jQuery(document).ready(function($){
		$("#owl-example").owlCarousel({
			autoPlay: true,
			center: true,
			items : 5, //10 items above 1000px browser width
			itemsDesktop : [1000,5], //5 items between 1000px and 901px
			itemsDesktopSmall : [900,3], // betweem 900px and 601px
			itemsTablet: [600,2], //2 items between 600 and 0
			itemsMobile : [600,1], // itemsMobile disabled - inherit from itemsTablet option
			pagination:false,
			navigation:true,
			navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
		});
		$("#owl-example-two").owlCarousel({
			autoPlay: true,
			center: true,
			items : 5, //10 items above 1000px browser width
			itemsDesktop : [1000,5], //5 items between 1000px and 901px
			itemsDesktopSmall : [900,3], // betweem 900px and 601px
			itemsTablet: [600,2], //2 items between 600 and 0
			itemsMobile : [600,1], // itemsMobile disabled - inherit from itemsTablet option
			pagination:false,
			navigation:true,
			navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
		});
		$("#owl-example-three").owlCarousel({
			autoPlay: true,
			center: true,
			items : 5, //10 items above 1000px browser width
			itemsDesktop : [1000,5], //5 items between 1000px and 901px
			itemsDesktopSmall : [900,3], // betweem 900px and 601px
			itemsTablet: [600,2], //2 items between 600 and 0
			itemsMobile : [600,1], // itemsMobile disabled - inherit from itemsTablet option
			pagination:false,
			navigation:true,
			navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
		});
		$("#owl-example-four").owlCarousel({
			autoPlay: true,
			center: true,
			items : 5, //10 items above 1000px browser width
			itemsDesktop : [1000,5], //5 items between 1000px and 901px
			itemsDesktopSmall : [900,3], // betweem 900px and 601px
			itemsTablet: [600,2], //2 items between 600 and 0
			itemsMobile : [600,1], // itemsMobile disabled - inherit from itemsTablet option
			pagination:false,
			navigation:true,
			navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
		});
		$("#owl-example1").owlCarousel({
			autoPlay: true,
			center: true,
			items : 4, //4 items above 1000px browser width
			itemsDesktop : [1000,4], //4 items between 1000px and 901px
			itemsDesktopSmall : [900,3], // betweem 900px and 601px
			itemsTablet: [600,2], //2 items between 600 and 0
			itemsMobile : [600,1], // itemsMobile disabled - inherit from itemsTablet option
			pagination:false,
			navigation:true,
			navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
		});
		$("#owl-example2").owlCarousel({
			autoPlay: true,
			center: true,
			items : 4, //4 items above 1000px browser width
			itemsDesktop : [1000,4], //4 items between 1000px and 901px
			itemsDesktopSmall : [900,3], // betweem 900px and 601px
			itemsTablet: [600,2], //2 items between 600 and 0
			itemsMobile : [600,1], // itemsMobile disabled - inherit from itemsTablet option
			pagination:false,
			navigation:true,
			navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
		});
		$("#owl-example3").owlCarousel({
			autoPlay: true,
			center: true,
			items : 4, //4 items above 1000px browser width
			itemsDesktop : [1000,4], //4 items between 1000px and 901px
			itemsDesktopSmall : [900,3], // betweem 900px and 601px
			itemsTablet: [600,2], //2 items between 600 and 0
			itemsMobile : [600,1], // itemsMobile disabled - inherit from itemsTablet option
			pagination:false,
			navigation:true,
			navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
		});
		$("#owl-example4").owlCarousel({
			autoPlay: true,
			center: true,
			items : 4, //4 items above 1000px browser width
			itemsDesktop : [1000,4], //4 items between 1000px and 901px
			itemsDesktopSmall : [900,3], // betweem 900px and 601px
			itemsTablet: [600,2], //2 items between 600 and 0
			itemsMobile : [600,1], // itemsMobile disabled - inherit from itemsTablet option
			pagination:false,
			navigation:true,
			navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
		});
		$("#owl-example-single").owlCarousel({
			autoPlay: true,
			center: true,
			items:4,
			pagination:false,
			navigation:true,
			navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
		});
		$("#branding_caro").owlCarousel({
			autoPlay: true,
			items : 6, //10 items above 1000px browser width
			itemsDesktop : [1000,5], //5 items between 1000px and 901px
			itemsDesktopSmall : [900,4], // betweem 900px and 601px
			itemsTablet: [600,2], //2 items between 600 and 0
			itemsMobile : false, // itemsMobile disabled - inherit from itemsTablet option
			pagination:false,
			navigation:true,
			navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
		});
		// accordion
		
		$('.collapse').on('shown.bs.collapse', function(){
			$(this).parent().find(".fa-plus").removeClass("fa-plus").addClass("fa-minus");
			}).on('hidden.bs.collapse', function(){
			$(this).parent().find(".fa-minus").removeClass("fa-minus").addClass("fa-plus");
		});
		$('#collapseTwo').collapse('show')
		$('#collapseThree').collapse('show')
		$('#collapseFour').collapse('show')
		$('#collapseFive').collapse('show')
		$('#collapseOneP').collapse('show')
		$('#collapseThreeP').collapse('show')
		
		//product image with tab and zoom
		$("#zoom_01").elevateZoom({scrollZoom : true, easing:true});
		$("#zoom_07").elevateZoom({scrollZoom : true, easing:true});
		$("#zoom_02").elevateZoom({tint:true, tintColour:'#FF6766', tintOpacity:0.0, easing:true});
		$("#zoom_03").elevateZoom({tint:true, tintColour:'#FF6766', tintOpacity:0.0, easing:true});
		$("#zoom_04").elevateZoom({tint:true, tintColour:'#FF6766', tintOpacity:0.0, easing:true});	
		
	});
	
	 
})(jQuery);




