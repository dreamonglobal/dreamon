import { Component, Input } from '@angular/core';

@Component({
	selector: 'molla-related-products-two',
	templateUrl: './related-products-two.component.html',
	styleUrls: ['./related-products-two.component.scss']
})

export class RelatedProductsTwoComponent {

	@Input() products = [];
	@Input() loaded = false;

}
