/***************************************************************************************************************
||||||||||||||||||||||||||||        CUSTOM SCRIPT FOR RinBuild                       |||||||||||||||||||||||||||
****************************************************************************************************************
||||||||||||||||||||||||||||              TABLE OF CONTENT                  ||||||||||||||||||||||||||||||||||||
****************************************************************************************************************
****************************************************************************************************************

01. Revolution slider
02. Sticky header
03. Prealoader
04. Language switcher
05. prettyPhoto
06. BrandCarousel
07. Testimonial carousel
08. ScrollToTop 
09. Cart Touch Spin
10. PriceFilter
11. Cart touch spin
12. Fancybox activator
13. ContactFormValidation
14. Scoll to target
15. PrettyPhoto

****************************************************************************************************************
||||||||||||||||||||||||||||            End TABLE OF CONTENT                ||||||||||||||||||||||||||||||||||||
****************************************************************************************************************/

"use strict";


// dropdown menu
var mobileWidth = 992;
var navcollapse = $('.navigation li.dropdown');

$(window).on('resize', function(){
    navcollapse.children('ul').hide();
    navcollapse.children('.megamenu').hide();
});

navcollapse.hover(function() {
if($(window).innerWidth() >= mobileWidth){
      $(this).children('ul').stop(true, false, true).slideToggle(300);
      $(this).children('.megamenu').stop(true, false, true).slideToggle(500);
    }
});

//Submenu Dropdown Toggle
if($('.main-header .navigation li.dropdown ul').length){
    $('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');		

    //Dropdown Button
    $('.main-header .navigation li.dropdown .dropdown-btn').on('click', function() {
        $(this).prev('ul').slideToggle(500);
        $(this).prev('.megamenu').slideToggle(500);
    });

    //Disable dropdown parent link
    $('.navigation li.dropdown > a').on('click', function(e) {
        e.preventDefault();
    });
}

// Scroll to a Specific Div
if($('.scroll-to-target').length){
    $(".scroll-to-target").on('click', function() {
        var target = $(this).attr('data-target');
       // animate
       $('html, body').animate({
           scrollTop: $(target).offset().top
        }, 1000);

    });
}



//Update Header Style and Scroll to Top
function headerStyle() {
    if($('.main-header').length){
        var windowpos = $(window).scrollTop();
        var siteHeader = $('.main-header');
        var scrollLink = $('.scroll-top');
        if (windowpos >= 250) {
            siteHeader.addClass('fixed-header');
            scrollLink.fadeIn(300);
        } else {
            siteHeader.removeClass('fixed-header');
            scrollLink.fadeOut(300);
        }
    }
}
headerStyle();


//Accordion Box
function accordion() {
    if($('.accordion-box').length){
        $(".accordion-box").on('click', '.accord-btn', function() {

            if($(this).hasClass('active')!==true){
            $('.accordion .accord-btn').removeClass('active');

            }

            if ($(this).next('.accord-content').is(':visible')){
                $(this).removeClass('active');
                $(this).next('.accord-content').slideUp(500);
            }else{
                $(this).addClass('active');
                $('.accordion .accord-content').slideUp(500);
                $(this).next('.accord-content').slideDown(500);	
            }
        });	
    }
}


//===Language switcher===
function languageSwitcher() {
    if ($("#polyglot-language-options").length) {
        $('#polyglotLanguageSwitcher').polyglotLanguageSwitcher({
            effect: 'slide',
            animSpeed: 500,
            testMode: true,
            onChange: function(evt) {
                    alert("The selected language is: " + evt.selectedItem);
            }

        });
    };
}



//===Search box ===
function searchbox() {
	//Search Box Toggle
	if($('.seach-toggle').length){
		//Dropdown Button
		$('.seach-toggle').on('click', function() {
			$(this).toggleClass('active');
			$(this).next('.search-box').toggleClass('now-visible');
		});
	}
}


// Date picker
function datepicker () {
    if ($('#datepicker').length) {
        $('#datepicker').datepicker();
    };
}



// Time picker
function timepicker () {
    if ($('input[name="time"]').length) {
        $('input[name="time"]').ptTimeSelect();
    }
}



// ===Prealoder===
function prealoader() {
    if($('.preloader').length){
        $('.preloader').delay(200).fadeOut(500);
    }
}



//  Fact counter
function CounterNumberChanger () {
	var timer = $('.timer');
	if(timer.length) {
		timer.appear(function () {
			timer.countTo();
		})
	}
}



// Single Product Tab
function singleProductTab () {
    if($('.tabs-box').length){
        $('.tabs-box .tab-buttons .tab-btn').on('click', function(e) {
            e.preventDefault();
            var target = $($(this).attr('data-tab'));

            if ($(target).is(':visible')){
                return false;
            }else{
                target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
                $(this).addClass('active-btn');
                target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
                target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab');
                $(target).fadeIn(300);
                $(target).addClass('active-tab');
            }
        });
    }
}



// Price Filter
function priceFilter() {
    if ($('.price-ranger').length) {
        $('.price-ranger #slider-range').slider({
            range: true,
            min: 10,
            max: 200,
            values: [11, 99],
            slide: function(event, ui) {
                $('.price-ranger .ranger-min-max-block .min').val('$' + ui.values[0]);
                $('.price-ranger .ranger-min-max-block .max').val('$' + ui.values[1]);
            }
        });
        $('.price-ranger .ranger-min-max-block .min').val('$' + $('.price-ranger #slider-range').slider('values', 0));
        $('.price-ranger .ranger-min-max-block .max').val('$' + $('.price-ranger #slider-range').slider('values', 1));
    };
}






// Cart Touch Spin
function cartTouchSpin() {
    if ($('.quantity-spinner').length) {
        $("input.quantity-spinner").TouchSpin({
            verticalbuttons: true
        });
    }
}



//=== Tool tip ===
function tooltip () {
	if ($('.tool_tip').length) {
			$('.tool_tip').tooltip();
		};
	$
}



// ===Project===
function projectMasonaryLayout() {
    if ($('.masonary-layout').length) {
        $('.masonary-layout').isotope({
            layoutMode: 'masonry'
        });
    }
    if ($('.post-filter').length) {
        $('.post-filter li').children('.filter-text').on('click', function() {
            var Self = $(this);
            var selector = Self.parent().attr('data-filter');
            $('.post-filter li').removeClass('active');
            Self.parent().addClass('active');
            $('.filter-layout').isotope({
                filter: selector,
                animationOptions: {
                    duration: 500,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });
    }

    if ($('.post-filter.has-dynamic-filters-counter').length) {
        // var allItem = $('.single-filter-item').length;
        var activeFilterItem = $('.post-filter.has-dynamic-filters-counter').find('li');
        activeFilterItem.each(function() {
            var filterElement = $(this).data('filter');
            var count = $('.filter-layout').find(filterElement).length;
            $(this).children('.filter-text').append('<span class="count">' + count + '</span>');
        });
    };
}



function countryInfo() {
    if ($('.area_select').length) {
        $('.area_select').change(function() {
            var val = $(this).val();
            if (val) {
                $('.state:not(#value' + val + ')').slideUp();
                $('#value' + val).slideDown();
            } else {
                $('.state').slideDown();
            }
        });
    }
}



// Select Menu 
function selectDropdown() {
    if ($(".selectmenu").length) {
        $(".selectmenu").selectmenu();

        var changeSelectMenu = function(event, item) {
            $(this).trigger('change', item);
        };
        $(".selectmenu").selectmenu({ change: changeSelectMenu });
    };
}



//=== CountDownTimer===
function countDownTimer () {
	if ($('.time-countdown').length) {
		$('.time-countdown').each(function () {
			var Self = $(this);
			var countDate = Self.data('countdown-time'); // getting date

			Self.countdown(countDate, function(event) {
	     		$(this).html('<h2>'+ event.strftime('%D : %H : %M : %S') +'</h2>');
	   		});
		});
	};
	if ($('.time-countdown-two').length) {
		$('.time-countdown-two').each(function () {
			var Self = $(this);
			var countDate = Self.data('countdown-time'); // getting date

			Self.countdown(countDate, function(event) {
	     		$(this).html('<li> <div class="box"> <span class="days">'+ event.strftime('%D') +'</span> <span class="timeRef">days</span> </div> </li> <li> <div class="box"> <span class="hours">'+ event.strftime('%H') +'</span> <span class="timeRef clr-1">hours</span> </div> </li> <li> <div class="box"> <span class="minutes">'+ event.strftime('%M') +'</span> <span class="timeRef clr-2">minutes</span> </div> </li> <li> <div class="box"> <span class="seconds">'+ event.strftime('%S') +'</span> <span class="timeRef clr-3">seconds</span> </div> </li>');
	   		});
		});
	};
}



//Sortable Masonary with Filters
function sortableMasonry() {
    if($('.sortable-masonry').length){

        var winDow = $(window);
        // Needed variables
        var $container=$('.sortable-masonry .items-container');
        var $filter=$('.filter-btns');

        $container.isotope({
            filter:'*',
             masonry: {
                columnWidth : '.masonry-item'
             },
            animationOptions:{
                duration:500,
                easing:'linear'
            }
        });


        // Isotope Filter 
        $filter.find('li').on('click', function(){
            var selector = $(this).attr('data-filter');

            try {
                $container.isotope({ 
                    filter	: selector,
                    animationOptions: {
                        duration: 500,
                        easing	: 'linear',
                        queue	: false
                    }
                });
            } catch(err) {

            }
            return false;
        });


        winDow.on('resize', function(){
            var selector = $filter.find('li.active').attr('data-filter');

            $container.isotope({ 
                filter	: selector,
                animationOptions: {
                    duration: 500,
                    easing	: 'linear',
                    queue	: false
                }
            });
        });


        var filterItemA	= $('.filter-btns li');

        filterItemA.on('click', function(){
            var $this = $(this);
            if ( !$this.hasClass('active')) {
                filterItemA.removeClass('active');
                $this.addClass('active');
            }
        });
    }
}



//Masonary
function enableMasonry() {
    if($('.masonry-items-container').length){

        var winDow = $(window);
        // Needed variables
        var $container=$('.masonry-items-container');

        $container.isotope({
            itemSelector: '.masonry-item',
             masonry: {
                columnWidth : '.masonry-item.col-lg-4'
             },
            animationOptions:{
                duration:500,
                easing:'linear'
            }
        });

        winDow.bind('resize', function(){

            $container.isotope({ 
                itemSelector: '.masonry-item',
                animationOptions: {
                    duration: 500,
                    easing	: 'linear',
                    queue	: false
                }
            });
        });
    }
}
enableMasonry();






/////////////////////////////
//Universal Code for All Owl Carousel Sliders
/////////////////////////////

if ($('.rinbuild-carousel').length) {
        $(".rinbuild-carousel").each(function (index) {
        var $owlAttr = {},
        $extraAttr = $(this).data("options");
        $.extend($owlAttr, $extraAttr);
        $(this).owlCarousel($owlAttr);
    });
}


// Main Slider Carousel
if ($('.banner-carousel').length) {
    $('.banner-carousel').owlCarousel({
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        loop:true,
        margin:0,
        nav: false,
        singleItem:true,
        smartSpeed: 500,
        autoplay: true,
        autoplayTimeout:6000,
        navText: [ '<span class="fas fa-angle-left"></span>', '<span class="fas fa-angle-right"></span>' ],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1024:{
                items:1
            }
        }
    });    		
}



// Main Slider Carousel
if ($('.product-image-carousel').length) {
    $('.product-image-carousel').owlCarousel({
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        loop: false,
        margin: 10,
        dots: false,
        nav: true,
        singleItem:true,
        smartSpeed: 1000,
        autoplay: 6000,
        autoplayTimeout:6000,
        navText: [ '<span class="fas fa-angle-left"></span>', '<span class="fas fa-angle-right"></span>' ],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1024:{
                items:4
            }
        }
    });    		
}





































if ($('.dial').length) {
    $('.dial').appear(function() {
        var elm = $(this);
        var color = elm.attr('data-fgColor');
        var perc = elm.attr('value');
        elm.knob({
            'value': 0,
            'min': 0,
            'max': 100,
            'skin': 'tron',
            'readOnly': true,
            'thickness': 0.10,
            'dynamicDraw': true,
            'displayInput': false
        });
        $({
            value: 0
        }).animate({
            value: perc
        }, {
            duration: 2000,
            easing: 'swing',
            progress: function() {
                elm.val(Math.ceil(this.value)).trigger('change');
            }
        });
        $(this).append(function() {});
    }, {
        accY: 20
    });
}
    



if ($('.single-portfolio-slider .bxslider').length) {
	$('.single-portfolio-slider .bxslider').bxSlider({
        nextSelector: '.single-portfolio-slider #slider-next',
        prevSelector: '.single-portfolio-slider #slider-prev',
        nextText: '<i class="fa fa-angle-right"></i>',
        prevText: '<i class="fa fa-angle-left"></i>',
        mode: 'vertical',
        auto: 'true',
        speed: '1000',
        pagerCustom: '.single-portfolio-slider .slider-pager .thumb-box'
    });
};

if ($('.single-product-image-holder .bxslider2').length) {
	$('.single-product-image-holder .bxslider2').bxSlider({
        nextSelector: '.single-product-image-holder #slider-next',
        prevSelector: '.single-product-image-holder #slider-prev',
        nextText: '<i class="fa fa-angle-right"></i>',
        prevText: '<i class="fa fa-angle-left"></i>',
        mode: 'fade',
        auto: 'true',
        speed: '700',
        pagerCustom: '.single-product-image-holder .slider-pager .thumb-box'
    });
};
	




//History Tabs
if($('.history-info-tabs').length){
    $('.history-info-tabs .tab-btns .p-tab-btn').on('click', function(e) {
        e.preventDefault();
        var target = $($(this).attr('data-tab'));

        if ($(target).hasClass('actve-tab')){
            return false;
        }else{
            $('.history-info-tabs .tab-btns .p-tab-btn').removeClass('active-btn');
            $(this).addClass('active-btn');
            $('.history-info-tabs .p-tabs-content .p-tab').removeClass('active-tab');
            $(target).addClass('active-tab');
        }
    });
}
	


//Progress Bar / Levels
if($('.progress-levels .progress-box .bar-fill').length){
    $(".progress-box .bar-fill").each(function() {
        $('.progress-box .bar-fill').appear(function(){
            var progressWidth = $(this).attr('data-percent');
            $(this).css('width',progressWidth+'%');
        });

    },{accY: 0});
}
//Fact Counter + Text Count
if($('.count-box').length){
    $('.count-box').appear(function(){

        var $t = $(this),
            n = $t.find(".count-text").attr("data-stop"),
            r = parseInt($t.find(".count-text").attr("data-speed"), 10);

        if (!$t.hasClass("counted")) {
            $t.addClass("counted");
            $({
                countNum: $t.find(".count-text").text()
            }).animate({
                countNum: n
            }, {
                duration: r,
                easing: "linear",
                step: function() {
                    $t.find(".count-text").text(Math.floor(this.countNum));
                },
                complete: function() {
                    $t.find(".count-text").text(this.countNum);
                }
            });
        }

    },{accY: 0});
}
//Hidden Sidebar
if ($('.hidden-bar').length) {
    var hiddenBar = $('.hidden-bar');
    var hiddenBarOpener = $('.hidden-bar-opener');
    var hiddenBarCloser = $('.hidden-bar-closer');
    var navToggler = $('.nav-toggler');
    $('.hidden-bar-wrapper').mCustomScrollbar();

    //Show Sidebar
    hiddenBarOpener.on('click', function () {
        hiddenBar.toggleClass('visible-sidebar');
        navToggler.toggleClass('open');
    });

    //Hide Sidebar
    hiddenBarCloser.on('click', function () {
        hiddenBar.toggleClass('visible-sidebar');
        navToggler.toggleClass('open');
    });
} 
//Accordion Box
if($('.accordion-box').length){
    $(".accordion-box").on('click', '.acc-btn', function() {

        var outerBox = $(this).parents('.accordion-box');
        var target = $(this).parents('.accordion');

        if($(this).hasClass('active')!==true){
            $(outerBox).find('.accordion .acc-btn').removeClass('active');
        }

        if ($(this).next('.acc-content').is(':visible')){
            return false;
        }else{
            $(this).addClass('active');
            $(outerBox).children('.accordion').removeClass('active-block');
            $(outerBox).find('.accordion').children('.acc-content').slideUp(300);
            target.addClass('active-block');
            $(this).next('.acc-content').slideDown(300);	
        }
    });	
}
//Single Vertical Carousel
if($('.single-vertical-carousel').length){
    $('.single-vertical-carousel').slick({
    dots: true,
    autoplay: true,
    loop:true,
    autoplaySpeed: 5000,
    infinite: true,
    responsive: true,
    slidesToShow: 2,
    vertical:true,
    slidesToScroll: 1,
    prevArrow:"<div class='prev-btn'><span class='fa fa-angle-up'></span></div>",
    nextArrow:"<div class='next-btn'><span class='fa fa-angle-down'></span></div>"
  });
}	
// Lazyload Images
if($('.lazy-image').length){
    new LazyLoad({
        elements_selector: ".lazy-image",
        load_delay: 0,
        threshold: 300
    });
}
//====== Magnific Popup
$('.video-popup').magnificPopup({
    type: 'iframe'
    // other options
});
//LightBox / Fancybox
if($('.lightbox-image').length) {
    $('.lightbox-image').fancybox({
        openEffect  : 'fade',
        closeEffect : 'fade',
        
        youtube : {
        controls : 0,
        showinfo : 0
    },
        
        helpers : {
            media : {}
        }
    });
}
//Paroller
if($('.paroller').length){
    $('.paroller').paroller({
          factor: 0.05,            // multiplier for scrolling speed and offset, +- values for direction control  
          factorLg: 0.05,          // multiplier for scrolling speed and offset if window width is less than 1200px, +- values for direction control  
          type: 'foreground',      // background, foreground  
          direction: 'horizontal'  // vertical, horizontal  
    });
}
// Elements Animation
if($('.wow').length){
    var wow = new WOW(
      {
        boxClass:     'wow',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset:       0,          // distance to the element when triggering the animation (default is 0)
        mobile:       false,       // trigger animations on mobile devices (default is true)
        live:         true       // act on asynchronously loaded content (default is true)
      }
    );
    wow.init();
}
// AOS Animation
if ($("[data-aos]").length) { 
    AOS.init({
    duration: 1000,
    mirror: true
  });
}
//Contact Form Validation
if($("#contact-form").length){
    $("#contact-form").validate({
        submitHandler: function(form) {
          var form_btn = $(form).find('button[type="submit"]');
          var form_result_div = '#form-result';
          $(form_result_div).remove();
          form_btn.before('<div id="form-result" class="alert alert-success" role="alert" style="display: none;"></div>');
          var form_btn_old_msg = form_btn.html();
          form_btn.html(form_btn.prop('disabled', true).data("loading-text"));
          $(form).ajaxSubmit({
            dataType:  'json',
            success: function(data) {
              if( data.status = 'true' ) {
                $(form).find('.form-control').val('');
              }
              form_btn.prop('disabled', false).html(form_btn_old_msg);
              $(form_result_div).html(data.message).fadeIn('slow');
              setTimeout(function(){ $(form_result_div).fadeOut('slow') }, 6000);
            }
          });
        }
    });
}
// Add Comment Form Validation
if($("#add-comment-form").length){
    $("#add-comment-form").validate({
        submitHandler: function(form) {
          var form_btn = $(form).find('button[type="submit"]');
          var form_result_div = '#form-result';
          $(form_result_div).remove();
          form_btn.before('<div id="form-result" class="alert alert-success" role="alert" style="display: none;"></div>');
          var form_btn_old_msg = form_btn.html();
          form_btn.html(form_btn.prop('disabled', true).data("loading-text"));
          $(form).ajaxSubmit({
            dataType:  'json',
            success: function(data) {
              if( data.status = 'true' ) {
                $(form).find('.form-control').val('');
              }
              form_btn.prop('disabled', false).html(form_btn_old_msg);
              $(form_result_div).html(data.message).fadeIn('slow');
              setTimeout(function(){ $(form_result_div).fadeOut('slow') }, 6000);
            }
          });
        }
    });
}




// Dom Ready Function
jQuery(document).on('ready', function () {
	(function ($) {
        // add your functions
        languageSwitcher ();
        searchbox ();
        datepicker ();
        timepicker ();
        
        CounterNumberChanger ();
        singleProductTab ();
        priceFilter ();
        cartTouchSpin ();
        selectDropdown ();
        tooltip ();
        countryInfo ();
        countDownTimer ();
        accordion ();
        
        
   
 
	})(jQuery);
});



jQuery(window).on('scroll', function(){
	(function ($) {

    headerStyle ()  
    
	})(jQuery);
});



// Instance Of Fuction while Window Load event
jQuery(window).on('load', function() {
    (function($) {
        prealoader ();
        projectMasonaryLayout ();
        sortableMasonry();
        enableMasonry();
     
        
    })(jQuery);
});



$(window).enllax();