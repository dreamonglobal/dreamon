import { Component, Input } from '@angular/core';
import { Product } from '../../../../../shared/classes/product';

@Component({
	selector: 'product-info-two',
	templateUrl: './info-two.component.html',
	styleUrls: ['./info-two.component.scss']
})

export class InfoTwoComponent {

	@Input() product: Product;

	setRating = (event: any) => {
		event.preventDefault();

		if (event.currentTarget.parentNode.querySelector('.active')) {
			event.currentTarget.parentNode.querySelector('.active').classList.remove('active');
		}

		event.currentTarget.classList.add('active');
	}
}