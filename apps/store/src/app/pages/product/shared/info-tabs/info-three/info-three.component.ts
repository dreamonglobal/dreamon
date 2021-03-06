import { Component, Input } from '@angular/core';
import { Product } from '../../../../../shared/classes/product';

@Component({
	selector: 'molla-product-info-three',
	templateUrl: './info-three.component.html',
	styleUrls: ['./info-three.component.scss']
})

export class InfoThreeComponent {

	@Input() product: Product;

	setRating = (event: any) => {
		event.preventDefault();

		if (event.currentTarget.parentNode.querySelector('.active')) {
			event.currentTarget.parentNode.querySelector('.active').classList.remove('active');
		}

		event.currentTarget.classList.add('active');
	}
}
