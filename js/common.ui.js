// header fix
// headerFixFn();
function headerFixFn() {
    var $header = $('.header');
    var $container = $('.container');
    var _headerHeight;
    if(!$header.length) return;
    $(window).on('load scroll', function () {
        _headerHeight = $header.outerHeight();
        $container.addClass('header-fix');
        $header.addClass('is-fixed');
    })
}

// scroll animation
function scrollAnimate(value, time) {
    $('html,body').animate({ scrollTop: value }, time);
}

// scroll top button show/hide
showScrollTopButton();
function showScrollTopButton() {
    var topBtn = document.querySelector('.scroll-top');
    var current;
    if(!topBtn) return;

    document.addEventListener('scroll', function () {
        current = window.pageYOffset;
        if (current > window.innerHeight){
            topBtn.classList.add('is-fixed');
        } else {
            topBtn.classList.remove('is-fixed');
        }
    });
}

// scroll opacity animaiton
var items = document.querySelectorAll('.scroll-ani');
for(var i=0; i<items.length; i++){
    var item = items[i];
    gsap.to(item, {
        autoAlpha: 1,
        scrollTrigger: {
            trigger: item,
            start: 'top bottom-=200',
            toggleActions: 'play none none reverse',
        }
    });
}
gsap.to('.main-title', {
    xPercent: 100,
    ease: "none",
    scrollTrigger: {
        trigger: ".section-main",
        start: "top top",
        scrub: true
    },
});
