import { Component } from '@angular/core';

@Component({
	selector: 'molla-shop-product-category-fluid',
	templateUrl: './product-category-fluid.component.html',
	styleUrls: ['./product-category-fluid.component.scss']
})

export class ProductCategoryFluidPageComponent {

	toggleSidebar() {
		if (
			document
				.querySelector('body')
				.classList.contains('sidebar-filter-active')
		) {
			document
				.querySelector('body')
				.classList.remove('sidebar-filter-active');
		} else {
			document
				.querySelector('body')
				.classList.add('sidebar-filter-active');
		}
	}

	hideSidebar() {
		document
			.querySelector('body')
			.classList.remove('sidebar-filter-active');
	}
}
