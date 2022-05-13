import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
	selector: 'molla-shop-dashboard-page',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss'],
})

export class DashboardComponent {

	constructor(private el: ElementRef, private renderer: Renderer2) {
	}

	viewTab($event: Event, prevId: number, nextId: number) {
		$event.preventDefault();
		const nodes = this.el.nativeElement.querySelectorAll(".nav-dashboard .nav-link");
		this.renderer.removeClass(nodes[prevId], 'active');
		this.renderer.addClass(nodes[nextId], 'active');
	}
}
