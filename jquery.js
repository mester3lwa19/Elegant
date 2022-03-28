$(document).ready(function() {
    var mixer = mixitup('.box-list')
    $(".wrapper .owl-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        items: 1,
        margin: 30,
        dots: true,
        nav: false,
    });

});