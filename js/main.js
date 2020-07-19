$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
    });

    $('.burger').on('click', function() {
        $('.head-menu').slideToggle('slow');
    });

    $('.footer_item_title').on('click', function() {
        let a = $(this).next();
        $('.footer_list:visible').not(a).slideUp();
        a.slideToggle(700);
    });
});

