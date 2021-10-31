/*global $, document, window
 */
$(document).ready(function ($) {
    'use strict';

    /*-------------------------------------
    Navbar Toggle for Mobile
    -------------------------------------*/
    function navbarCollapse() {
        if ($(window).width() < 992) {
            $(document).on('click', function (event) {
                var clickover = $(event.target);
                var _opened = $("#navbar-collapse").hasClass("in");
                if (_opened === true && !(clickover.is('.dropdown'))) {
                    $("button.navbar-toggle").trigger('click');
                }
            });

            $('.dropdown').unbind('click');
            $('.dropdown').on('click', function () {
                $(this).children('.dropdown-menu').slideToggle();
            });

            $('.dropdown *').on('click', function (e) {
                e.stopPropagation();
            });
        }
    }
    navbarCollapse();

    /*-------------------------------------
    Language Toggle
    -------------------------------------*/
    function languageTogg() {
        if ($('#languageToggle').length > 0) {
            $('#languageToggle').on('click', function () {
                $('#language-select').slideToggle();
            });

            $(document).on('click', function (event) {
                var clickover = $(event.target);
                var _opened = $("#language-select").is(':visible');
                if (_opened === true && !(clickover.is('#languageToggle'))) {
                    $("#languageToggle").trigger('click');
                }
            });

            $("#languageToggle *").on('click', function (e) {
                e.stopPropagation();
            });
        }
    }

    languageTogg();

    /*-------------------------------------
    Header Search Toggle
    -------------------------------------*/
    function searchToggle() {
        if ($(window).width() > 991) {
            $('#navbar-search-toggle').unbind('click');
            $('#navbar-search-toggle').on('click', function () {
                $(this).children('.fa').toggleClass('fa-search fa-close');
                $('#navbar-searchform').slideToggle();
            });

            $(document).on('click', function (event) {
                var clickover = $(event.target);
                var _opened = $("#navbar-searchform").is(':visible');
                if (_opened === true && !(clickover.is('#navbar-search-toggle, #navbar-search-toggle *, #navbar-searchform, #navbar-searchform *'))) {
                    $("#navbar-search-toggle").trigger('click');
                }
            });
        }
    }

    searchToggle();

    /*-------------------------------------
    Generic Isotope
    -------------------------------------*/
    $('.elh-grid').each(function () {
        // init Isotope
        var $grid = $(this).isotope({
            // options...
        });

        // layout Isotope after each image loads
        $grid.imagesLoaded().progress(function () {
            $grid.isotope('layout');
        });

        //Filter
        if ($(this).siblings('.elh-grid-filter').length > 0) {
            // filter items on button click
            var gridFilter = $(this).siblings('.elh-grid-filter');
            gridFilter.on('click', 'button', function () {
                var filterValue = $(this).attr('data-filter');
                $(this).siblings('button').removeClass('active');
                $(this).addClass('active');
                $grid.isotope({
                    filter: filterValue
                });
            });
        }
    });

    /*-------------------------------------
    Banner Slider
    -------------------------------------*/
    if ($('#banner-bg-slider').length > 0) {
        $('#banner-bg-slider').owlCarousel({
            singleItem: true,
            slideSpeed: 200,
            stopOnHover: true,
            //autoPlay: 3000,
            navigation: false,
            navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            pagination: false,
            transitionStyle: "fade"
        });
    }

    if ($('#banner-slider').length > 0) {
        $('#banner-slider').owlCarousel({
            singleItem: true,
            slideSpeed: 200,
            stopOnHover: true,
            //autoPlay: 3000,
            navigation:true,
            navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            pagination: false,
        });
    }

    /*-------------------------------------
    Generic Carousel
    -------------------------------------*/
    $('.elh-generic-carousel').each(function () {
        if (!$(this).hasClass('elh-generic-4')) {
            $(this).owlCarousel({
                items: 3,
                itemsDesktop: [1199, 3],
                itemsDesktopSmall: [991, 2],
                itemsMobile: [639, 1],
                slideSpeed: 200,
                stopOnHover: true,
                //autoPlay: 3000,
                navigation: true,
                navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                pagination: false,
            });
        } else {
            $(this).owlCarousel({
                items: 4,
                itemsDesktop: [1199, 4],
                itemsDesktopSmall: [991, 2],
                itemsMobile: [579, 1],
                slideSpeed: 200,
                stopOnHover: true,
                //autoPlay: 3000,
                navigation: true,
                navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                pagination: false,
            });
        }
    });

    /*-------------------------------------
    Single Carousel
    -------------------------------------*/
    $('.elh-single-carousel').each(function () {
        $(this).owlCarousel({
            singleItem: true,
            slideSpeed: 200,
            stopOnHover: true,
            //autoPlay: 3000,
            navigation: true,
            navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            pagination: false,
        });
    });

    /*-------------------------------------
    Instructors Carousel
    -------------------------------------*/
    $('.elh-instructor-carousel').each(function () {
        $(this).owlCarousel({
            items: 4,
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [991, 3],
            itemsTablet: [768, 3],
            itemsTabletSmall: [579, 2],
            itemsMobile: [479, 1],
            slideSpeed: 200,
            stopOnHover: true,
            autoPlay: 3000,
            navigation: true,
            navigationText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
            pagination: false,
        });
    });

    /*-------------------------------------
    Gallery Carousel
    -------------------------------------*/
    if ($('#elh-gallery-carousel').length > 0) {
        $('#elh-gallery-carousel').owlCarousel({
            items: 5,
            itemsDesktop: [1199, 5],
            itemsDesktopSmall: [991, 3],
            itemsMobile: [579, 2],
            slideSpeed: 200,
            stopOnHover: true,
            autoPlay: 3000,
            navigation: false,
            navigationText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
            pagination: false,
        });
    }

    /*-------------------------------------
    Country Flag Carousel
    -------------------------------------*/
    if ($('#elh-country-flag-slider').length > 0) {
        $('#elh-country-flag-slider').owlCarousel({
            items: 6,
            itemsDesktop: [1199, 4],
            itemsDesktopSmall: [991, 4],
            itemsTablet: [768, 4],
            itemsTabletSmall: [579, 3],
            itemsMobile: [479, 2],
            slideSpeed: 200,
            stopOnHover: true,
            //autoPlay: 3000,
            navigation: false,
            pagination: false,
        });
    }

    /*-------------------------------------
    Instructor comment carousel
    -------------------------------------*/
    if ($('#instructor-comment-carousel').length > 0) {
        $('#instructor-comment-carousel').owlCarousel({
            singleItem: true,
            slideSpeed: 200,
            stopOnHover: true,
            autoPlay: 3000,
            navigation: false,
            pagination: false,
        });
    }

    /*-------------------------------------
    Testimonial Slick Carousel
    -------------------------------------*/
    $('.elh-testimonial-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.elh-testimonial-nav-thumbs'
    });
    $('.elh-testimonial-nav-thumbs').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.elh-testimonial-main',
        dots: false,
        focusOnSelect: true,
        centerMode: true,
        centerPadding: '0px',
        arrows: false,
    });

    /*-------------------------------------
    Single Product Gallery
    -------------------------------------*/
    if ($('#elh-single-product-gallery').length > 0) {
        $('#elh-single-product-gallery').owlCarousel({
            singleItem: true,
            slideSpeed: 200,
            stopOnHover: true,
            //autoPlay: 3000,
            navigation: true,
            navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            pagination: false,
        });
    }

    /*-------------------------------------
    Count To
    -------------------------------------*/
    function animateCountTo(ct) {
        if ($.fn.visible && $(ct).visible() && !$(ct).hasClass('animated')) {
            $(ct).countTo({
                speed: 2000
            });
            $(ct).addClass('animated');
        }
    }

    function initCountTo() {
        var counter = $('.elh-count');
        counter.each(function () {
            animateCountTo(this);
        });
    }

    initCountTo();

    /*-------------------------------------
    Count Down
    -------------------------------------*/
    $('.countdown').each(function () {
        var endTime = $(this).data('time');
        $(this).countdown(endTime, function (tm) {
            var countTxt = '';
            countTxt += '<span class="section_count"><span class="section_count_data"><span class="count-data"><span class="tcount days">%D </span><span class="text">Days</span></span></span></span>';
            countTxt += '<span class="section_count"><span class="section_count_data"><span class="count-data"><span class="tcount hours">%H</span><span class="text">Hours</span></span></span></span>';
            countTxt += '<span class="section_count"><span class="section_count_data"><span class="count-data"><span class="tcount minutes">%M</span><span class="text">Minutes</span></span></span></span>';
            countTxt += '<span class="section_count"><span class="section_count_data"><span class="count-data"><span class="tcount seconds">%S</span><span class="text">Seconds</span></span></span></span>';

            $(this).html(tm.strftime(countTxt));
        });
    });

    /*--------------------------------------
    Plyr Video
    ---------------------------------------*/
    plyr.setup();

    /*-------------------------------------
    Magnific Popup
    -------------------------------------*/
    $('.image-large, .elh-gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });
    $('.video-play, .open-map').magnificPopup({
        type: 'iframe'
    });
    $.extend(true, $.magnificPopup.defaults, {
        iframe: {
            patterns: {
                youtube: {
                    index: 'youtube.com/',
                    id: 'v=',
                    src: 'https://www.youtube.com/embed/%id%?autoplay=1'
                },
                vimeo: {
                    index: 'vimeo.com/',
                    id: '/',
                    src: '//player.vimeo.com/video/%id%?autoplay=1'
                },
                gmaps: {
                    index: '//maps.google.',
                    src: '%id%&output=embed'
                }
            }
        }
    });

    /*-------------------------------------
    Rating Form
    -------------------------------------*/
    function ratingChange(rc) {
        $('.elh-rating-inputs label').removeClass('elh-rate-on');
        $(rc).parent('label').prevAll().addBack().addClass('elh-rate-on');
    }
    $('input[name=rate-value]').on('click', function () {
        ratingChange(this);
    });

    /*-------------------------------------
    Sidebar Affix
    -------------------------------------*/
    if ($('#sidebar-affix').length > 0) {
        $('#sidebar-affix').affix({
            offset: {
                top: function () {
                    return (this.top = $('#course-sidebar').offset().top);
                },
                bottom: function () {
                    return (this.bottom = $('body').height() - $('#course-sidebar').offset().top - $('#elh-course-container').outerHeight(true));
                }
            }
        });
    }
    
    /*-----------------------------------
    Contact Form
    -----------------------------------*/
    // Function for email address validation
    function isValidEmail(emailAddress) {
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

        return pattern.test(emailAddress);

    }
    $("#contactForm").on('submit', function (e) {
        e.preventDefault();
        var data = {
            name: $("#name").val(),
            email: $("#email").val(),
            phone: $("#phone").val(),
            phone: $("#subject").val(),
            message: $("#message").val()
        };

        if (isValidEmail(data['email']) && (data['message'].length > 1) && (data['name'].length > 1) && (data['phone'].length > 1) && (data['phone'].length > 1)) {
            $.ajax({
                type: "POST",
                url: "sendmail.php",
                data: data,
                success: function () {
                    $('#contactForm .input-success').delay(500).fadeIn(1000);
                    $('#contactForm .input-error').fadeOut(500);
                }
            });
        } else {
            $('#contactForm .input-error').delay(500).fadeIn(1000);
            $('#contactForm .input-success').fadeOut(500);
        }

        return false;
    });
    
    /*-----------------------------------
    Subscription
    -----------------------------------*/
    $(".elh-subscribe-form").ajaxChimp({
        callback: mailchimpResponse,
        url: "http://codepassenger.us10.list-manage.com/subscribe/post?u=6b2e008d85f125cf2eb2b40e9&id=6083876991" // Replace your mailchimp post url inside double quote "".  
    });

    function mailchimpResponse(resp) {
        if (resp.result === 'success') {

            $('.newsletter-success').html(resp.msg).fadeIn().delay(3000).fadeOut();

        } else if (resp.result === 'error') {
            $('.newsletter-error').html(resp.msg).fadeIn().delay(3000).fadeOut();
        }
    }


    /*-------------------------------------
    Lesson Page
    -------------------------------------*/

    /*** Lesson show and hide ***/
    function lessonShowHide() {
        $('#lessonListWrap').toggleClass('lesson-list-showing');
    }

    $('#lessonListToggle').on('click', function () {
        lessonShowHide();
        $(this).children('.fa').toggleClass('fa-list fa-close');
        $('#lessonContent .plyr-video').css('max-width', $(window).height() * 1.7776);
    });

    $('#lessonContent .plyr-video').css('max-width', $(window).height() * 1.7776);
    
    var nlTimer;
    $('#lessonContentWrap').on('mousemove', function () {
        $('#navbar-lesson').addClass('show-navbar-lesson');
        try {
            clearTimeout(nlTimer);
        } catch (e) {}
        nlTimer = setTimeout(function () {
            $('#navbar-lesson').removeClass('show-navbar-lesson');
        }, 2000);
    });

    $('#lessonContentWrap').on('mouseout', function () {
        $('#navbar-lesson').removeClass('show-navbar-lesson');
    });

    /*** Lesson Change ***/
    function lessonVidChange(lessonVid) {
        var elhVidId = $(lessonVid).data('elhvideo');
        if ($(lessonVid).data('elhvidtype') == 'vimeo') {
            $('#lessonPlayer').html('<div class="elh-run-player" data-type="vimeo" data-video-id="' + elhVidId + '"></div>');
        } else if ($(lessonVid).data('elhvidtype') == 'youtube') {
            $('#lessonPlayer').html('<div class="elh-run-player" data-type="youtube" data-video-id="' + elhVidId + '"></div>');
        } else {
            $('#lessonPlayer').html('<video class="elh-run-player" controls><source src="' + elhVidId + '" type="video/mp4"></video>');
        }
        plyr.setup('.elh-run-player', {
            //autoplay: true,
        });
    }

    $('#lessonListWrap .elh-lesson-item > a').on('click', function (lessonClick) {
        lessonClick.preventDefault();
        lessonVidChange(this);
        $('#lessonListWrap .elh-lesson-item > a').removeClass('running-lesson');
        $(this).addClass('running-lesson');
    });

    lessonVidChange('#lessonListWrap .elh-lesson-item > .running-lesson');

    /*-------------------------------------
    Window Events
    -------------------------------------*/
    $(window).on('scroll', function () {
        initCountTo();
    });

    $(window).on('resize orientationchange', function () {
        navbarCollapse();
        $('#lessonContent .plyr-video').css('max-width', $(window).height() * 1.7776);
    });
});
