/* eslint-disable no-var */
import { Component, Input, ElementRef, AfterViewInit, AfterViewChecked, Renderer2 } from '@angular/core';

declare var Isotope: any;
declare var imagesLoaded: any;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare var $: any;

@Component({
	selector: 'molla-isotope-grid',
	templateUrl: './isotope-grid.component.html',
	styleUrls: ['./isotope-grid.component.scss']
})

export class IsotopeGridComponent implements AfterViewInit, AfterViewChecked {

	@Input() dataChange = false;
	@Input() adClass = "";
	@Input() options: any;

	isotope: any;
	isReset = false;

	constructor(private el: ElementRef, private renderer: Renderer2) { }

	ngAfterViewInit() {
		this.renderer.setAttribute(this.el.nativeElement, 'style', 'display: block; overflow: hidden;');
		this.isotope = new Isotope(this.el.nativeElement, this.options);

		imagesLoaded(this.el.nativeElement, function () {
			this.isotope.layout();
		});
	}

	ngAfterViewChecked() {
		if (this.isReset) {
			let children = this.el.nativeElement.querySelectorAll(this.options.itemSelector);

			if (!this.dataChange) {
				for (let i = 0; i < children.length; i++) {
					if (!children[i].getAttribute('style')) {
						this.renderer.setStyle(children[i], 'opacity', '0');
					}
				}
			}

			imagesLoaded(this.el.nativeElement, function (el) {
				const items = this.isotope.getItemElements();
				children = el.elements[0].querySelectorAll(this.options.itemSelector);

				if (this.dataChange) {
					this.isotope.reloadItems();
					this.isotope.arrange();
					this.dataChange = false;
				} else {
					for (let i = 0; i < items.length; i++) {
						if (!el.elements[0].contains(items[i])) {
							this.isotope.remove(items[i]);
						}
					}
					this.isotope.layout();
					for (let i = 0; i < children.length; i++) {
						if (items.indexOf(children[i]) < 0) {
							children[i].setAttribute('style', 'opacity: 1');
							this.isotope.appended(children[i]);
						}
					}
				}

				this.isotope.layout();
			});

			this.isReset = false;
		}
	}

	destroy() {
		this.isotope.destroy();
	}

	layout() {
		this.renderer.setAttribute(this.el.nativeElement, 'style', 'display: block;');

		imagesLoaded(this.el.nativeElement, function (el) {
			this.isotope = new Isotope(el.elements[0], this.options);
		});
	}

	filter(filterString: string, duration = "0.7s") {
		this.isotope.arrange({
			filter: filterString,
			transitionDuration: duration
		});
	}

	sort(sortBy: string) {
		this.isotope.arrange({
			sort: sortBy,
			transitionDuration: '0.7s'
		})
		this.isotope.arrange({
			getSortData: {
				title: '.title a',
				price: '.product-price parseInt'
			},
			sortBy: ['title', 'price']
		});
	}
}
