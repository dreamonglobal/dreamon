import { Component } from '@angular/core';
import { ElementItem, elements } from './element-list';


@Component({
	selector: 'molla-elements-list',
	templateUrl: './elements-list.component.html',
	styleUrls: ['./elements-list.component.scss']
})

export class ElementsListComponent {

	items: ElementItem[] = elements;
}
