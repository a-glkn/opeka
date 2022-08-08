$(function() {

	$('.row-text-slider').slick({
		dots: false,
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		accessibility: false,
		// mobileFirst: true, 
		variableWidth: true,
		arrows: false,
		// responsive: [
		// 	{
		// 		breakpoint: 768,
		// 		settings: "unslick"
		// 	}
		// ]
	});

	$('.js-collapse').each(function(i, el) {
		var h = $(this).data('height') ? $(this).data('height') : 400;

		$('.js-collapse__body', this).css('height', h);
	});


	$('.js-collapse__action').on( "click", function( event ) {
		var cont = $(this).parents('.js-collapse');

		$(cont).addClass('collapsed');
	});


	$('.toggle-block__header').on( "click", function( event ) {
		
		var block = $(this).parents('.toggle-block');

		$(block).toggleClass('active');

	});

	$('.section_central-intro .mouse-down').on( "click", function( event ) {
		
		$('html, body').animate({
			scrollTop: $('#edu-content').offset().top 
		}, 600);
	

	});

	

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


	$('.gallery-slider').slick({
		dots: true,
		arrows: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		accessibility: false,
		prevArrow: `<button type="button" data-role="none" class="slick-prev slick-arrow" aria-label="Previous" role="button" style="">
			<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
			viewBox="0 0 492.004 492.004" style="enable-background:new 0 0 492.004 492.004;" xml:space="preserve">
				<g>
					<g>
						<path d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12
							c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028
							c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265
							c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"/>
					</g>
				</g>
			</svg>
		</button>`,
		nextArrow: `<button type="button" data-role="none" class="slick-next slick-arrow" aria-label="Next" role="button" style="">
			<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
			viewBox="0 0 492.004 492.004" style="enable-background:new 0 0 492.004 492.004;" xml:space="preserve">
				<g>
					<g>
						<path d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12
							c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028
							c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265
							c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"/>
					</g>
				</g>
			</svg>
		</button>`
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