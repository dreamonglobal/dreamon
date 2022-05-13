import { Component, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Component({
	selector: 'molla-count-to',
	templateUrl: './count-to.component.html',
	styleUrls: ['./count-to.component.scss']
})

export class CountToComponent {

	@Input() to: number;
	@Input() from: number;
	@Input() speed: number;
	@Input() interval: number;

	isExcuted = false;

	constructor(public elRef: ElementRef, private renderer: Renderer2) {
	}

	@HostListener('window:scroll', ['$event'])

	scrollHandler() {
		let pt = 0;
			const amount = this.to - this.from;
			const height = this.renderer.parentNode(this.renderer.parentNode(this.renderer.parentNode(this.elRef.nativeElement))).offsetTop

		if (!this.isExcuted && pt <= this.speed && height >= window.pageYOffset) {
			if (!this.isExcuted) {
				const timer = setInterval(() => {
					if (pt >= this.speed) {
						clearInterval(timer);
					}

					this.elRef.nativeElement.innerHTML = Math.ceil(pt * amount / this.speed).toString();
					pt = pt + this.interval;
				}, this.interval);
			}

			this.isExcuted = true;
		}
	}
}
