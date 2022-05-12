import { Component, Input } from '@angular/core';

@Component({
	selector: 'molla-shop-list-two',
	templateUrl: './shop-list-two.component.html',
	styleUrls: ['./shop-list-two.component.scss']
})

export class ShopListTwoComponent {

	@Input() products = [];
	@Input() loaded = false;

}
