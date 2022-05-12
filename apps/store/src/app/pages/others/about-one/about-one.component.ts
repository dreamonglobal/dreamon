import { ChangeDetectionStrategy, Component } from '@angular/core';
import { sliderOpt } from '../../../shared/data';
import { brands, customSay, team } from './about-one-data';


@Component( {
	selector: 'pages-about-page',
	templateUrl: './about-one.component.html',
	styleUrls: [ './about-one.component.scss' ],
	changeDetection: ChangeDetectionStrategy.OnPush
} )

export class AboutOneComponent {

	customSay = customSay;
	brands = brands;
	team = team;
	sliderOption = {
		...sliderOpt,
		nav: false,
		dots: true,
		margin: 20,
		loop: false,
		responsive: {
			1200: {
				nav: true
			}
		}
	}
	teamOption = {
		...sliderOpt,
		nav: false,
		dots: false,
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
}
