import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../../shared/classes/product';
import { ApiService } from '../../../shared/services/api.service';


@Component({
	selector: 'molla-product-fullwidth-page',
	templateUrl: './fullwidth.component.html',
	styleUrls: ['./fullwidth.component.scss']
})

export class FullWidthPageComponent implements OnDestroy {

	product: Product;
	prev: Product;
	next: Product;
	related = [];
	loaded = false;

	constructor(
		public apiService: ApiService,
		readonly activeRoute: ActivatedRoute,
		public router: Router
	) {
		activeRoute.params.subscribe(params => {
			this.loaded = false;
			this.apiService.getSingleProduct(params['slug']).subscribe(result => {
				if (result === null) {
					this.router.navigate(['/pages/404']);
				}

				this.product = result.product;
				this.prev = result.prevProduct;
				this.next = result.nextProduct;
				this.related = result.relatedProducts;
				this.loaded = true;
			});
		});
	}

	ngOnDestroy(): void {
		document.querySelector('body').classList.remove('sidebar-filter-active');
	}
}
