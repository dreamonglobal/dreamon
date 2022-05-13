import { Component, Input } from '@angular/core';

@Component( {
	selector: 'molla-accordion',
	templateUrl: './accordion.component.html',
	styleUrls: [ './accordion.component.scss' ]
} )

export class AccordionComponent {

	@Input() accordionID: string;
	@Input() adClass: string;

}
