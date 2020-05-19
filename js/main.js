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
			search();
		} else {
			navbar.classList.remove("sticky");	
		}
	}
	
	function search() {
		if ($('.header_left span').css('display')=='none') {
			$('.header_left span').css('display','block');
			$('.header_left input[type="text"]').css('opacity','0');
			$(".nav_center .search .header_left a").addClass('hidden');
		}
		if(!$('.search-block').hasClass('hidden')){
			$( ".nav_center .checkout li.find" ).removeClass('hidden');
			$( ".nav_center .checkout li.close-search" ).addClass('hidden');
			$('.search-block').addClass('hidden');
		}
	}
	var btn = $('#button-to-top');

	$(window).scroll(function() {
	if ($(window).scrollTop() > 300) {
		btn.addClass('show');
	} else {
		btn.removeClass('show');
	}
	});

	btn.on('click', function(e) {
	e.preventDefault();
	$('html, body').animate({scrollTop:0}, '300');
	});
	if($('body').hasClass('main-page')){
		$('.nav_area').css({"position":"absolute","width":"100%"});
	}
	$('.nav_left').hover(function(){
		if($('.cat_mega_menu').hasClass('hidden-xs')){
			$('.cat_mega_menu').fadeIn(400);
			$('.cat_mega_menu').css({"z-index":"101","transition":"all 0.5s ease 0s"});
		}else{
			$('.cat_mega_menu').css({"display": "block", "opacity": "1","position": "fixed"});
		}
	}, function () {
		$('.cat_mega_menu').fadeOut(300);
    });

	$( "#openNav" ).click(function() {
		$('#mySidenav').addClass('open');
		$('.outer').addClass('outer-layer');
		$('.outer').css('z-index','1100');
	});
	$( "#Clickable").click(function() {
		$('#mySidenav').removeClass('open');
		$('.outer').removeClass('outer-layer');	
	});
	$( "#closeNav" ).click(function() {
		$('#mySidenav').removeClass('open');
		$('.outer').removeClass('outer-layer');
	});

	$( ".nav_center .search span" ).click(function() {
		$(this).hide();
		$(".nav_center .search .header_left a").removeClass('hidden');
		$('.nav_center .search .header_left a').css({"float": "left"});
		$('.nav_center .search .header_left input[type="text"]').css({"width": "78%", "opacity": "1"});
	});
	$( ".nav_center .checkout li.find" ).click(function() {
		$( ".nav_center .checkout li.hidden" ).removeClass('hidden');
		$( ".nav_center .checkout li.find" ).addClass('hidden');
		$('.search-block').removeClass('hidden');
	});
	$( ".nav_center .checkout li.close-search" ).click(function() {
		$( ".nav_center .checkout li.find" ).removeClass('hidden');
		$( ".nav_center .checkout li.close-search" ).addClass('hidden');
		$('.search-block').addClass('hidden');
	});
	$('.filter_box_left .off').click(function(){
		$('.filter_box_left .filter_cont li:nth-child(3) img.hidden').removeClass('hidden');
		$('.filter_box_left .filter_cont img.visible').addClass('hidden');
		$('.filter_box_left .filter_cont img.visible').removeClass('visible');
		$('.filter-toggle').fadeOut();
		$('.filter-toggle-main').css("width","100%");
		$('.filter-toggle-main .row div.col-md-3').css("width","20%");
		$('.pagi_line').addClass('active');
	});
	$('.filter_box_left .on').click(function(){
		$('.filter_box_left .filter_cont li:nth-child(2)  img.hidden').removeClass('hidden').addClass('visible');
		$('.filter_box_left ul li:nth-child(3) img').addClass('hidden');
		$('.filter-toggle').fadeIn();
		$('.filter-toggle-main').css("width","75%");
		$('.filter-toggle-main .row div.col-md-3').css("width","25%");
		$('.pagi_line').removeClass('active');
		
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

		$(".traverse div:first-child").addClass("active");
		setTimeout(autoAddClass, 5000);
		function autoAddClass(){
			var next = $(".traverse div.active").removeClass("active").next();
			if(next.length)
				$(next).addClass('active');
			else
				$('.traverse div:first-child').addClass('active');
			setTimeout(autoAddClass, 5000);
		}
		
	}); 
})(jQuery);




