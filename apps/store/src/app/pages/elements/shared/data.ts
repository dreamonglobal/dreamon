import { sliderOpt } from '../../../shared/data';

export const productSlider1: Record<string, unknown> = {
    ...sliderOpt,
    nav: false,
    dots: false,
    margin: 20,
    loop: false,
    responsive: {
        0: {
            items: 2
        },
        480: {
            items: 2
        },
        768: {
            items: 3
        },
        992: {
            items: 4
        },
        1200: {
            items: 5
        }
    }
};

export const productSlider2: Record<string, unknown> = {
    ...sliderOpt,
    nav: false,
    dots: false,
    margin: 20,
    loop: false,
    responsive: {
        0: {
            items: 2
        },
        480: {
            items: 2
        },
        992: {
            items: 3
        },
        1200: {
            items: 4
        }
    }
};