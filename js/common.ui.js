gsap.registerPlugin(ScrollTrigger);

// Part 2
const sections = document.querySelectorAll('.scroll-ani');
sections.forEach((section, index) => {
    gsap.to(section, {
        autoAlpha: 1,
        scrollTrigger: {
            trigger: section,
            start: 'top bottom-=300',
            toggleActions: 'play none none reverse',
            // markers: true
        }
    });

    ScrollTrigger.create({
        trigger: section,
        id: index + 1,
        start: 'top center',
        end: () => `+=${section.clientHeight + 30}`,
        toggleActions: 'play reverse none reverse',
        toggleClass: { targets: section, className: "is-active" },
        // markers: true
    })
})

// header fix
headerFixFn();
function headerFixFn() {
    var $header = $('.header');
    var $container = $('.container');
    var _headerHeight;
    if(!$header.length) return;
    $(window).on('load scroll', function () {
        // _headerHeight = $header.outerHeight();
        $container.addClass('header-fix');
        $header.addClass('is-fixed');
    })
}

// scroll animation
function scrollAnimate(value, time) {
    $('html,body').animate({ scrollTop: value }, time);
}

// scroll top button fixed
scrollTopButtonFixFn();
function scrollTopButtonFixFn() {
    var $topBtn = $('.scroll-top');
    if(!$topBtn.length) return;
    var _winHeight = $(window).height();
    var _current;
    $(window).on('scroll', function () {
        _current = $(window).scrollTop();

        if(_current > _winHeight) {
            console.log(1);
            $topBtn.addClass('is-fixed');
        } else {
            console.log(2);
            $topBtn.removeClass('is-fixed');
        }
    })
}