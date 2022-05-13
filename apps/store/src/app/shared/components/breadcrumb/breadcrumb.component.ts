import { Component, Input } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Product } from '../../classes/product';



@Component({
	selector: 'molla-breadcrumb',
	templateUrl: './breadcrumb.component.html',
	styleUrls: ['./breadcrumb.component.scss']
})

export class BreadcrumbComponent {

	@Input() prev: Product;
	@Input() next: Product;
	@Input() current: string;
	@Input() fullWidth = false;

	SERVER_URL = environment.SERVER_URL;
}