$('.owl-carousel').owlCarousel({
    stagePadding: 0,
    margin: -140,
    // loop: true,
    nav: true,
    autoWidth: false,
    autoHeight: true,
    nav: false,
    dots: false,
    responsive:{
        0: {
            items: 1,
            margin: -80,
        },
        380: {
            items: 1,
            margin: -100,
        },
        576: {
            items: 2,
            margin: -50,
        },
        683: {
            items: 2,
            margin: -140,
        }
    }
})