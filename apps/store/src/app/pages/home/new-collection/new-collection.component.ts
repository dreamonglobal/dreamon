import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'molla-new-collection',
	templateUrl: './new-collection.component.html',
	styleUrls: ['./new-collection.component.scss']
})

export class NewCollectionComponent implements OnInit {

	@Input() products = [];
	@Input() loaded = false;

	categories = [['all'], ['women'], ['men'], ['shoes', 'boots']];
	titles = { "all": "All", "women": "Women", "men": "Men", "shoes": "Shoes & Boots" };

	constructor() { }

	ngOnInit(): void {
	}
}
