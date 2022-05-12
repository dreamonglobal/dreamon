import { Component, OnInit, HostListener, Input } from '@angular/core';

import { environment } from '../../../../../environments/environment';

@Component({
	selector: 'product-toggle-sidebar',
	templateUrl: './toggle-sidebar.component.html',
	styleUrls: ['./toggle-sidebar.component.scss']
})

export class ToggleSidebarComponent implements OnInit {

	@Input() products = [];

	toggleState = false;
	SERVER_URL = environment.SERVER_URL;

	ngOnInit(): void {
		this.changeToggleState();
	}

	@HostListener('window: resize', ['$event'])
	onResize() {
		this.changeToggleState();
	}

	changeToggleState() {
		if (window.innerWidth < 992) {
			this.toggleState = true;
		} else {
			this.toggleState = false;
		}
	}

	toggleSidebar() {
		document.querySelector('body').classList.toggle('sidebar-filter-active');
	}

	hideSidebar() {
		document.querySelector('body').classList.remove('sidebar-filter-active');
	}
}
