import { sliderOpt } from '../../shared/data';

export const introSlider = {
    ...sliderOpt,
    nav: false,
    loop: false,
}

export const brandSlider = {
    ...sliderOpt,
    nav: false,
    dots: false,
    margin: 0,
    loop: false,
    responsive: {
        0: {
            items: 2
        },
        420: {
            items: 3
        },
        600: {
            items: 4
        },
        900: {
            items: 5
        },
        1024: {
            items: 6
        },
        1360: {
            items: 7,
            nav: true,
            dots: true
        }
    }
}

export const specialSlider = {
    ...sliderOpt,
    nav: false,
    dots: true,
    margin: 20,
    loop: false,
    autoHeight: true,
    responsive: {
        320: {
            items: 2
        },
        768: {
            items: 3
        },
        1200: {
            items: 4
        },
        1600: {
            items: 4,
            nav: true,
            dots: false
        }
    }
}

export const bannerSlider = {
    ...sliderOpt,
    nav: false,
    dots: true,
    margin: 20,
    loop: false,
    responsive: {
        320: {
            items: 1
        },
        552: {
            items: 2
        },
        1200: {
            items: 3,
            dots: false
        }
    }
}

export const blogSlider = {
    ...sliderOpt,
    nav: false,
    dots: true,
    items: 3,
    margin: 20,
    loop: false,
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 2
        },
        992: {
            items: 3
        }
    }
}

export const testiSlider = {
    nav: false,
    dots: false,
    margin: 0,
    items: 6,
    loop: false,
    responsive: {
        0: {
            items: 1
        },
        360: {
            items: 2
        },
        600: {
            items: 3
        },
        992: {
            items: 4
        },
        1200: {
            items: 5
        },
        1500: {
            items: 6
        }
    }
}