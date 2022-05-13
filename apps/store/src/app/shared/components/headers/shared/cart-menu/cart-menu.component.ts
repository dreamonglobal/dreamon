import { Component } from '@angular/core';
import { environment } from '../../../../../../environments/environment';
import { CartService } from '../../../../services/cart.service';


@Component({
	selector: 'molla-cart-menu',
	templateUrl: './cart-menu.component.html',
	styleUrls: ['./cart-menu.component.scss']
})

export class CartMenuComponent {

	SERVER_URL = environment.SERVER_URL;

	constructor(public cartService: CartService) {
	}

	removeFromCart(event: Event, product: any) {
		event.preventDefault();
		this.cartService.removeFromCart(product);
	}
}