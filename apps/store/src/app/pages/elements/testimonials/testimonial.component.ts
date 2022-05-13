import { Component } from '@angular/core';
import { sliders } from './testimonial-data';


@Component({
	selector: 'molla-elements-testimonial-page',
	templateUrl: './testimonial.component.html',
	styleUrls: ['./testimonial.component.scss']
})

export class TestimonialPageComponent {

	testSliders = sliders;
}