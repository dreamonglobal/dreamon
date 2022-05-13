import { Component } from '@angular/core';
import { accordionGroups } from './accordion-data';


@Component({
	selector: 'molla-elements-accordions-page',
	templateUrl: './accordion.component.html',
	styleUrls: ['./accordion.component.scss']
})

export class AccordionsPageComponent {

	accordionGroups = accordionGroups;

}
