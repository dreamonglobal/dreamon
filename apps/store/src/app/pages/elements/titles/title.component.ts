import { Component } from '@angular/core';
import { itemNames, tabContent } from './title-data';


@Component({
	selector: 'molla-elements-titles-page',
	templateUrl: './title.component.html',
	styleUrls: ['./title.component.scss']
})

export class TitlesPageComponent {

	public itemNames = itemNames;
	public tabContent = tabContent;

}
