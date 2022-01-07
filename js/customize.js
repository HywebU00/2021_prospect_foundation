// 自行加入的JS請寫在這裡
$(function() {
    //sticky sidebar
    if ($('.stickySidebar').length > 0) {
        var stickySidebar = new StickySidebar('.stickySidebar', {
            containerSelector: '.main',
            topSpacing: 93,
            bottomSpacing: 0,
            minWidth: 768,
            resizeSensor: true,
        });
    }
    // 首頁輪播
    $('.mpSlider-for').slick({
        mobileFirst: true,
        dots: false,
        arrows: false,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 5000,
        autoplay: true,
        fade: true,
        lazyLoaded: true,
        lazyLoad: 'ondemand',
        ease: 'ease',
        asNavFor: '.mpSlider-nav',
        customPaging: function(slider, i) {
            var title = $(slider.$slides[i]).find('img').attr('alt').trim();
            return $('<button type="button" aria-label="' + title + '"/>').text(title);
        },
    });
    $('.mpSlider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.mpSlider-for',
        dots: false,
        arrows: true,
        speed: 1000,
        autoplaySpeed: 5000,
        lazyLoad: 'ondemand',
        focusOnSelect: true,
        infinite: true,
        responsive: [{
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: true,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                },
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                },
            },
        ],
    });

    $('.videoSlider').slick({
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,

    });

    $('.trendingSlider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.trendingSlider-nav'
    });
    $('.trendingSlider-nav').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.trendingSlider-for',
        infinite: false,
        dots: true,
        centerMode: false,
        focusOnSelect: true,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 5,
                    dots: false,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 4,
                    dots: false,
                },
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 3,
                    dots: false,
                },
            },
            {
                breakpoint: 420,
                settings: {
                    slidesToShow: 2,
                    dots: false,
                },
            },
        ],
    });


    // 廣告輪播
    $('.adSlider').slick({
        mobileFirst: true,
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        arrow: true,
        lazyLoaded: true,
        lazyLoad: 'ondemand',
        ease: 'ease',
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    arrows: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    arrows: true,
                },
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: true,
                },
            },
        ],
    });

    $('.cp_slider').slick({
        centerMode: true,
        dots: true,
        infinite: true,
        autoplay: false,
        centerPadding: 'calc((100% - 1200px) / 2)',
        slidesToShow: 1,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '60px',
                }
            },{
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0',
                    slidesToShow: 1
                }
            }
        ]
    });

    //
    $('.cppic_slider').slick({
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        centerPadding: '60px',
        // pauseOnHover: true,
        // pauseOnFocus: true,
        // focusOnSelect: true,
        // accessibility: true,
        // lazyLoad: 'ondemand',
        // ease: 'ease',
        responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 545,
                settings: {
                    arrows: true,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                },
            },
        ],
    });
    // cp_photo
    $('.Slider-for').on('init reInit afterChange', function(event, slick, currentSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $('.controls').html(i + '/' + slick.slideCount);
    });
    $('.Slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        swipe: true,
        swipeToSlide: true,
        lazyLoad: 'ondemand',
        asNavFor: '.Slider-nav',
        infinite: true,
    });
    $('.Slider-nav').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        asNavFor: '.Slider-for',
        dots: true,
        arrows: true,
        lazyLoad: 'ondemand',
        focusOnSelect: true,
        infinite: true,
    });

    $('.live_container .close').click(function(e) {
        $(".live_container").hide();
    });

    var _dot = $('.cp_slider .slick-dots').children('li');
    var _dotAmount = _dot.length;
    if (_dotAmount == 1) {
        _dot.hide();
    }
});



$(document).ready(function() {
    var swiperThumb = new Swiper(".SwiperThumb", {
        spaceBetween: 0,
        slidesPerView: 1,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        // autoplay: {
        //     pauseOnMouseEnter: true, //滑鼠移至swiper上停止
        //     disableOnInteraction: true, //移開後可以繼續autoPlay
        // },
        breakpoints: {
            575: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
        }
    });
    var SwiperMain = new Swiper(".SwiperMain", {
        autoplay: {
            delay: 8000, //輪播秒數
            pauseOnMouseEnter: false, //滑鼠移至swiper上停止
            disableOnInteraction: false, //移開後可以繼續autoPlay
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: swiperThumb, //同步至swiperThumb
        }
    });
    swiperThumb.$el.on('mouseover', () => {
        SwiperMain.autoplay.stop();
    });
    swiperThumb.$el.on('mouseleave', () => {
        SwiperMain.autoplay.running = true;
        SwiperMain.autoplay.run();
    });
    // 從主要內容按下tab時，Slider要從第一張開始
    $(".fixed_sidebar_group").find('.sidebar_list').last().find('a').on('keydown', function(e) {
        var keyCode = e.keyCode || e.which;
        if (keyCode == 9) {
            SwiperMain.slideTo(0, 0);
        }
    })
    // 從thumb next按下shift+tab時，Slider要從最後一張開始
    $(".mpbanner_slider_thumb a.swiper-button-next").on('keydown', function(e) {
        var keyCode = e.keyCode || e.which;
        if (keyCode == 9 && e.shiftKey) {
            SwiperMain.slideTo(SwiperMain.slides.length - 1, 0);
        }
    })
    // 從thumb perv按下tab時，Slider要從第一張開始
    // 從thumb next按下shift+tab時，Slider要從最後一張開始
    $(".mpbanner_slider_thumb a.swiper-button-prev").on('keydown', function(e) {
        var keyCode = e.keyCode || e.which;
        if (keyCode == 9) {
            SwiperMain.slideTo(0, 0);
        }
        if (keyCode == 9 && e.shiftKey) {
            SwiperMain.slideTo(SwiperMain.slides.length - 1, 0);
        }
    })
    $(".mpbanner_slider").on('keydown', 'a.swiper-access-href', function(e) {
        var keyCode = e.keyCode || e.which;
        if (keyCode == 9) {
            SwiperMain.autoplay.stop(); //swiper 停止自動播放
            if (e.shiftKey) {
                //Focus previous input
                // if is not slider end, move to previous slider
                if (!SwiperMain.isBeginning) {
                    SwiperMain.slidePrev(0);
                }
            } else {
                // Focus next input
                // if is not slider end, move to next slider,
                // else move to thumb, slide to first,focus to prev
                if (!SwiperMain.isEnd) {
                    SwiperMain.slideNext(0);
                } else {
                    $(".mpbanner_slider_thumb a.swiper-button-prev").focus();
                    SwiperMain.slideTo(0, 0)
                }
            }
        }
    });
    $(".mpbanner_slider_thumb").on('keydown', 'a.swiper-access-href', function(e) {
        var keyCode = e.keyCode || e.which;
        if (keyCode == 9) {
            SwiperMain.autoplay.stop(); //swiper 停止自動播放
            if (e.shiftKey) {
                //Focus previous input
                // if is not slider end, move to previous slider,else back to main, move to last slide
                if (!SwiperMain.isBeginning) {
                    SwiperMain.slidePrev(0);
                } else {
                    SwiperMain.slideTo(SwiperMain.slides.length - 1, 0);
                }
            } else {
                // Focus next input
                // if is not slider end, move to next slider
                if (!SwiperMain.isEnd) {
                    SwiperMain.slideNext(0);
                }
            }
        }
    });

});
$(document).ready(function() {
    var swiperThumb02 = new Swiper(".SwiperThumb02", {
        spaceBetween: 0,
        slidesPerView: 1,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        autoplay: {
            delay: 5000,
            pauseOnMouseEnter: true, //滑鼠移至swiper上停止
            disableOnInteraction: true, //移開後可以繼續autoPlay
        },
        breakpoints: {
            575: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 5,
            },
        }
    });
    var SwiperMain02 = new Swiper(".SwiperMain02", {
        autoplay: {
            delay: 5000, //輪播秒數
            pauseOnMouseEnter: false, //滑鼠移至swiper上停止
            disableOnInteraction: false, //移開後可以繼續autoPlay
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: swiperThumb02, //同步至swiperThumb
        }
    });
    swiperThumb02.$el.on('mouseover', () => {
        SwiperMain02.autoplay.stop();
    });
    swiperThumb02.$el.on('mouseleave', () => {
        SwiperMain02.autoplay.running = true;
        SwiperMain02.autoplay.run();
    });
    // 從主要內容按下tab時，Slider要從第一張開始
    $(".fixed_sidebar_group").find('.sidebar_list').last().find('a').on('keydown', function(e) {
        var keyCode = e.keyCode || e.which;
        if (keyCode == 9) {
            SwiperMain02.slideTo(0, 0);
        }
    })
    // 從thumb next按下shift+tab時，Slider要從最後一張開始
    $(".mpbanner_slider_thumb a.swiper-button-next").on('keydown', function(e) {
        var keyCode = e.keyCode || e.which;
        if (keyCode == 9 && e.shiftKey) {
            SwiperMain02.slideTo(SwiperMain02.slides.length - 1, 0);
        }
    })
    // 從thumb perv按下tab時，Slider要從第一張開始
    // 從thumb next按下shift+tab時，Slider要從最後一張開始
    $(".mpbanner_slider_thumb a.swiper-button-prev").on('keydown', function(e) {
        var keyCode = e.keyCode || e.which;
        if (keyCode == 9) {
            SwiperMain02.slideTo(0, 0);
        }
        if (keyCode == 9 && e.shiftKey) {
            SwiperMain02.slideTo(SwiperMain02.slides.length - 1, 0);
        }
    })
    // $(".mpbanner_slider").on('keydown', 'a.swiper-access-href', function(e) {
    //     var keyCode = e.keyCode || e.which;
    //     if (keyCode == 9) {
    //         SwiperMain02.autoplay.stop(); //swiper 停止自動播放
    //         if (e.shiftKey) {
    //             //Focus previous input
    //             // if is not slider end, move to previous slider
    //             if (!SwiperMain02.isBeginning) {
    //                 SwiperMain02.slidePrev(0);
    //             }
    //         } else {
    //             // Focus next input
    //             // if is not slider end, move to next slider,
    //             // else move to thumb, slide to first,focus to prev
    //             if (!SwiperMain02.isEnd) {
    //                 SwiperMain02.slideNext(0);
    //             } else {
    //                 $(".mpbanner_slider_thumb a.swiper-button-prev").focus();
    //                 SwiperMain02.slideTo(0, 0)
    //             }
    //         }
    //     }
    // });
    // $(".mpbanner_slider_thumb").on('keydown', 'a.swiper-access-href', function(e) {
    //     var keyCode = e.keyCode || e.which;
    //     if (keyCode == 9) {
    //         SwiperMain02.autoplay.stop(); //swiper 停止自動播放
    //         if (e.shiftKey) {
    //             //Focus previous input
    //             // if is not slider end, move to previous slider,else back to main, move to last slide
    //             if (!SwiperMain02.isBeginning) {
    //                 SwiperMain02.slidePrev(0);
    //             } else {
    //                 SwiperMain02.slideTo(SwiperMain02.slides.length - 1, 0);
    //             }
    //         } else {
    //             // Focus next input
    //             // if is not slider end, move to next slider
    //             if (!SwiperMain02.isEnd) {
    //                 SwiperMain02.slideNext(0);
    //             }
    //         }
    //     }
    // });

});