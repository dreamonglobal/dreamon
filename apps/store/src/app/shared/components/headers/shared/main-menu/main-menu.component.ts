import { Component, OnDestroy } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
	selector: 'molla-main-menu',
	templateUrl: './main-menu.component.html',
	styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnDestroy {

	current = '/';

	private subscr: Subscription;

	constructor(private router: Router) {
		this.subscr = this.router.events.subscribe(event => {
			if (event instanceof NavigationStart) {
				this.current = event.url;
			} else if (event instanceof NavigationEnd) {
				this.current = event.url;
			}
		});
	}

	ngOnDestroy(): void {
		this.subscr.unsubscribe();
	}

	viewAllDemos(event: any) {
		event.preventDefault();
		const list = document.querySelectorAll('.demo-list .hidden');
		for (let i = 0; i < list.length; i++) {
			list[i].classList.add('show');
		}

		event.target.parentElement.classList.add('d-none');
	}
}
