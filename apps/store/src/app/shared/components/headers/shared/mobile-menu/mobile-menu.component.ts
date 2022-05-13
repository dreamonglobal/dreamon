import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs';

// eslint-disable-next-line no-var
declare var $: any;

@Component({
	selector: 'molla-mobile-menu',
	templateUrl: './mobile-menu.component.html',
	styleUrls: ['./mobile-menu.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})

export class MobileMenuComponent implements OnDestroy {

	searchTerm = "";

	private subscr: Subscription;

	constructor(private router: Router) {
		this.subscr = this.router.events.subscribe(event => {
			if (event instanceof NavigationStart) {
				this.hideMobileMenu();
			}
		});
	}

	ngOnDestroy(): void {
		this.subscr.unsubscribe();
	}

	submenuToggle(e) {
		const parent: HTMLElement = e.target.closest('li');
		const submenu: HTMLElement = parent.querySelector('ul');

		if (parent.classList.contains('open')) {
			$(submenu).slideUp(300, function () {
				parent.classList.remove('open');
			});
		}
		else {
			$(submenu).slideDown(300, function () {
				parent.classList.add('open');
			});
		}

		e.preventDefault();
		e.stopPropagation();
	}

	hideMobileMenu() {
		document.querySelector('body').classList.remove('mmenu-active');
		document.querySelector('html').removeAttribute('style');
	}

	submitSearchForm(e: any) {
		e.preventDefault();
		this.searchTerm = e.currentTarget.querySelector('.form-control').value;
		this.router.navigate(['/shop/sidebar/list'], { queryParams: { searchTerm: this.searchTerm } });
	}
}
