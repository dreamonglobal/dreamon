import { Component, Input } from '@angular/core';

@Component({
	selector: 'molla-page-header',
	templateUrl: './page-header.component.html',
	styleUrls: ['./page-header.component.scss']
})

export class PageHeaderComponent {

	@Input() containerClass = "container";
	@Input() image = 'assets/images/page-header-bg.jpg';
	@Input() subtitle: string;
	@Input() title: string;
}
