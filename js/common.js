$(function() {

	$('.faq__item').on( "click", function( event ) {
		$(this).toggleClass('active');
	});

	$.fn.extend({
		toggleText: function(a, b){
			return this.text(this.text() == b ? a : b);
		}
	});

	$('.pansion-block .btn-toggler').click(function() {
		
		var container = $(this).parents('.pansion-block');

		container.toggleClass('pansion-block_cut');
		$(this).toggleText('Подробнее', 'Скрыть');

	});

	function adjustIntroSection() {
		$('.full-screen-height-adjustment').css('height', $(window).height() );
	}
	adjustIntroSection();

	$(window).resize(function () { 
		adjustIntroSection();
	});

	$('.btn_toggle').on('click', function () {
		var bound = $(this).data('bound');
		var primary = $(this).data('primary');
		var secondary = $(this).data('secondary');

		$('.not-shown', bound).slideToggle();

		$(this).toggleText(primary, secondary)
		.toggleClass('active');
	});


	$('.tabs__controls__item', '.tabs').on('click', function () {
		var index = $(this).index();

		$('.tabs__controls__item.active', '.tabs').removeClass('active');
		$('.tabs__content__item.active', '.tabs').removeClass('active');

		$('.tabs__controls__item:eq(' + index + ')', '.tabs').addClass('active');
		$('.tabs__content__item:eq(' + index + ')', '.tabs').addClass('active');
	});

	$('.section_tabs .tab-headers__item').on('click', function () {
		var index = $(this).index();

		$('.tab-contents__item.active', '.section_tabs').removeClass('active');
		$('.tab-headers__item.active', '.section_tabs').removeClass('active');

		$('.tab-contents__item:eq(' + index + ')', '.section_tabs').addClass('active');
		$('.tab-headers__item:eq(' + index + ')', '.section_tabs').addClass('active');
	});

	$('.slider-gallery').slick({
		dots: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		accessibility: false
	});

	$('.page-navigation__item').on('click', function () {
		var href = $('a', this).attr('href');

		$('html, body').animate({
			scrollTop: $(href).offset().top - 72 
		}, 700);
	});


	if( $('.page-navigation').length ) {
		$(window).bind('scroll', function() {
			var currentTop = $(window).scrollTop();
			var elems = $('section');
	
			elems.each(function(index) {
				var elemTop 	= $(this).offset().top - 72;
				var elemBottom 	= elemTop + $(this).height();
				
				if(currentTop >= elemTop && currentTop <= elemBottom) {
					var id 		= $(this).attr('id');
					var navElem = $('a[href="#' + id+ '"]', '.page-navigation');
					navElem.parent().addClass('active').siblings().removeClass('active');
				}
			});
		}); 
	}
});