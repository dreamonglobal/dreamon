import { Component } from '@angular/core';

@Component({
	selector: 'molla-shop-product-category-boxed',
	templateUrl: './product-category-boxed.component.html',
	styleUrls: ['./product-category-boxed.component.scss']
})

export class ProductCategoryBoxedPageComponent {

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
