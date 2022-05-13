import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { brands, counters, iconBoxes, members } from './about-two-data';


@Component({
	selector: 'molla-pages-about-two-page',
	templateUrl: './about-two.component.html',
	styleUrls: ['./about-two.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})

export class AboutTwoPageComponent {

	iconBoxes = iconBoxes;
	brands = brands;
	members = members;
	counters = counters;

	constructor(public sanitizer: DomSanitizer) {
	}
}
