import { Component, ElementRef, Input, Renderer2 } from '@angular/core';

@Component({
	selector: 'molla-image',
	templateUrl: './image.component.html',
	styleUrls: ['./image.component.scss']
})

export class ImageComponent {

	@Input() src: string;
	@Input() width: string | number;
	@Input() height: string | number;
	@Input() fixedPt: string | number;
	@Input() minHeight: string;
	@Input() alt = 'banner';
	@Input() backgroundColor: string;

	defaultImage = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

	constructor(private el: ElementRef, private renderer: Renderer2) { }

	handler(event: any) {
		let value: string | number;

		switch (event.reason) {
			case 'setup':
				value = '100%';

				if (this.fixedPt) {
					value = this.fixedPt;
				} else if (this.height && this.width) {
					value = Math.floor((parseFloat(this.height.toString()) / parseFloat(this.width.toString()) * 1000)) / 10 + '%';
				} else {
					value = '100%';
				}

				this.renderer.setStyle(this.el.nativeElement, 'padding-top', value);

				if (this.minHeight) {
					this.renderer.setStyle(this.el.nativeElement, 'min-height', this.minHeight + 'rem');
				}

				if (this.backgroundColor) {
					this.renderer.setStyle(this.el.nativeElement, 'background-color', this.backgroundColor);
				}
				break;
			case 'observer-emit':
				break;
			case 'loading-succeeded':
				if (this.minHeight) {
					this.renderer.setStyle(this.el.nativeElement.querySelector('img'), 'min-height', this.minHeight + 'rem');
				}
				break;
			default:
				break
		}
	}
}
