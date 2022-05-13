import { Component, Input } from '@angular/core';

@Component({
	selector: 'molla-new-collection',
	templateUrl: './new-collection.component.html',
	styleUrls: ['./new-collection.component.scss']
})

export class NewCollectionComponent {

	@Input() products = [];
	@Input() loaded = false;

	categories = [['all'], ['women'], ['men'], ['shoes', 'boots']];
	titles = { "all": "All", "women": "Women", "men": "Men", "shoes": "Shoes & Boots" };

}