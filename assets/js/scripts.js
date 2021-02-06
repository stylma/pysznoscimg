let navigation = document.getElementById('nav');

window.addEventListener('scroll', function () {
    let scrollYPosition = window.pageYOffset;

    if (scrollYPosition > 50) {
        navigation.classList.add('move');
    } else {
        navigation.classList.remove('move');
    }

})

// INICJALIZAJA ANIMATION ON SCROLL
AOS.init();

// HAMBURGER

let hamburger = document.getElementById('hamburger-js');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('open')
    navigation.classList.toggle('menu-open')
})

// OWL CAROUSEL TESTIMONIAL

$(function () {
    $(".owl-carousel").owlCarousel({
        items: 2,
    });
});

$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();
});

const right = document.getElementById('right');
const left = document.getElementById('left');
const carousel = document.querySelector('.carousel');

let counter = 650;
right.addEventListener('click', () => {
    if (counter === 1950) {
        counter = 0;
    }
    carousel.style.transform = `translateX(-${counter}px)`;
    counter = counter + 650;
});
