import { Component, ElementRef } from '@angular/core';

@Component({
	selector: 'molla-shop-sidebar-two',
	templateUrl: './shop-sidebar-two.component.html',
	styleUrls: ['./shop-sidebar-two.component.scss']
})

export class ShopSidebarTwoComponent {

	constructor(private el: ElementRef) { }

	hideSidebarFilter(): void {
		const body = document.querySelector('body');
		body.classList.remove('sidebar-filter-active');
	}

	cleanAllFilters(event: Event): void {
		const checkboxes: any = this.el.nativeElement.querySelectorAll('.custom-control-input');

		for (let i = 0; i < checkboxes.length; i++) {
			checkboxes[i].checked = false;
		}

		event.preventDefault();
	}
}
