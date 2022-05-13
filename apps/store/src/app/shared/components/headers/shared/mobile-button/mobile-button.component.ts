import { Component, Renderer2 } from '@angular/core';
import { UtilsService } from '../../../../../shared/services/utils.service';


@Component({
	selector: 'molla-mobile-button',
	templateUrl: './mobile-button.component.html',
	styleUrls: ['./mobile-button.component.scss']
})

export class MobileButtonComponent {

	constructor(public utils: UtilsService, public render: Renderer2) { }

	toggleMenu(event: any) {
		const body = document.querySelector('body');
		const html = document.querySelector('html');

		if (body.classList.contains('mmenu-active') || event.target.classList.contains('mobile-menu-overlay')) {
			this.render.removeClass(body, 'mmenu-active');
			this.render.removeAttribute(html, 'style')
		} else {
			this.render.addClass(body, 'mmenu-active');
			this.render.setStyle(html, 'overflow-x', 'hidden');
		}
	}
}
