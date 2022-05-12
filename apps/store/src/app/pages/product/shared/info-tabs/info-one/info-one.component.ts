import { Component, Input } from '@angular/core';
import { Product } from '../../../../../shared/classes/product';

@Component({
	selector: 'product-info-one',
	templateUrl: './info-one.component.html',
	styleUrls: ['./info-one.component.scss']
})

export class InfoOneComponent {

	@Input() product: Product;

	setRating = (event: any) => {
		event.preventDefault();

		if (event.currentTarget.parentNode.querySelector('.active')) {
			event.currentTarget.parentNode.querySelector('.active').classList.remove('active');
		}

		event.currentTarget.classList.add('active');
	}
}