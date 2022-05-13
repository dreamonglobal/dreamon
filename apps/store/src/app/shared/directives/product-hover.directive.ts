import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
	selector: '[mollaProductHover]'
})

export class ProductHoverDirective {

	constructor(private el: ElementRef, private renderer: Renderer2) {
	}

	@HostListener('mouseover', ['$event'])
	onMouseOver() {
		const item = this.el.nativeElement;
		const animDiff = item.offsetHeight - (item.querySelector(".product-body").offsetHeight + item.querySelector(".product-media").offsetHeight);
		const animDistance = item.querySelector(".product-footer").offsetHeight - animDiff;
		this.renderer.setStyle(item.querySelector(".product-footer"), "visibility", "visible");
		this.renderer.setStyle(item.querySelector(".product-footer"), "transform", "translateY(0)");
		this.renderer.setStyle(item.querySelector(".product-body"), "transform", "translateY(-" + animDistance + "px)");
	}

	@HostListener('mouseleave', ['$event'])
	onMouseLeave() {
		const item = this.el.nativeElement;
		this.renderer.setStyle(item.querySelector(".product-footer"), "visibility", "hidden");
		this.renderer.setStyle(item.querySelector(".product-footer"), "transform", "translateY(100%)");
		this.renderer.setStyle(item.querySelector(".product-body"), "transform", "translateY(0)");
	}
}
