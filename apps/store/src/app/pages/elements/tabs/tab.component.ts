import { Component } from '@angular/core';
import { horiTab, vertTab } from './tab-data';


@Component({
	selector: 'molla-elements-tabs-page',
	templateUrl: './tab.component.html',
	styleUrls: ['./tab.component.scss']
})

export class TabsPageComponent {

	public horiData = horiTab;
	public vertData = vertTab;

}
