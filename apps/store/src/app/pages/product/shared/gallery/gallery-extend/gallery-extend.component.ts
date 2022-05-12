import { Component, Input } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

import { Product } from '../../../../../shared/classes/product';
import { environment } from '../../../../../../environments/environment';
import { sliderOpt } from '../../../../../shared/data';


@Component( {
	selector: 'product-gallery-extend',
	templateUrl: './gallery-extend.component.html',
	styleUrls: [ './gallery-extend.component.scss' ]
} )

export class GalleryExtendComponent {

	@Input() product: Product;
	@Input() loaded = false;

	options = {
		...sliderOpt,
		nav: true,
		dots: false,
		items: 3,
		margin: 20,
		loop: false,
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 2
			},
			992: {
				items: 3
			}
		}
	};

	SERVER_URL = environment.SERVER_URL;

	constructor( public lightBox: Lightbox ) { }
}