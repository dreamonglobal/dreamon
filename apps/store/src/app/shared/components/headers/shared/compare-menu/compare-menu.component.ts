import { Component } from '@angular/core';
import { Product } from '../../../../../shared/classes/product';
import { CompareService } from '../../../../../shared/services/compare.service';


@Component({
	selector: 'molla-compare-menu',
	templateUrl: './compare-menu.component.html',
	styleUrls: ['./compare-menu.component.scss']
})

export class CompareMenuComponent {

	constructor(public compareService: CompareService) { }

	removeFromCompare($event: Event, product: Product) {
		$event.preventDefault();
		this.compareService.removeFromCompare(product);
	}

	clearAllCompare($event: Event) {
		$event.preventDefault();
		this.compareService.clearAllCompare();
	}
}
