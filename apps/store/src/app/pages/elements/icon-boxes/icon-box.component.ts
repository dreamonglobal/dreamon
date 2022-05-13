import { Component } from '@angular/core';
import { iconBoxes } from './icon-box-data';


@Component({
	selector: 'molla-elements-icon-boxes-page',
	templateUrl: './icon-box.component.html',
	styleUrls: ['./icon-box.component.scss']
})

export class IconBoxesPageComponent {

	public items = iconBoxes;

}
