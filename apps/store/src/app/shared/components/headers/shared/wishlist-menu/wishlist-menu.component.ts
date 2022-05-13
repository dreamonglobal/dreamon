import { Component } from '@angular/core';
import { WishlistService } from '../../../../../shared/services/wishlist.service';


@Component({
	selector: 'molla-wishlist-menu',
	templateUrl: './wishlist-menu.component.html',
	styleUrls: ['./wishlist-menu.component.scss']
})

export class WishlistMenuComponent {
	constructor(public wishlistService: WishlistService) { }
}
