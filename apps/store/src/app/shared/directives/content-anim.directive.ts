import { Directive, ElementRef, HostListener, Input, AfterViewInit } from '@angular/core';
import { AnimationPlayer, AnimationBuilder, animate, style } from '@angular/animations';

import { animations } from '../data';

// eslint-disable-next-line no-var
declare var $: any;

@Directive( {
	selector: '[mollaContentAnim]'
} )

export class ContentAnimDirective implements AfterViewInit {

	@Input() aniName = 'fadeIn';
	@Input() duration = '.8s';
	@Input() offset = 0;

	first = true;
	player: AnimationPlayer;

	constructor ( private el: ElementRef, private animationBuilder: AnimationBuilder ) { }

	ngAfterViewInit () {
		this.el.nativeElement.classList.add( 'appear-animate' );
		this.createAnimation();

		setTimeout( () => {
			this.handleAnimation();

			const slider = this.el.nativeElement.closest( 'owl-carousel' );

			if ( slider ) {
				$( slider ).on( 'translate.owl.carousel', () => {
					if ( this.el.nativeElement.closest( '.owl-item:not(.active)' ) ) {
						this.el.nativeElement.classList.add( 'appear-animate' );
					}
				} );

				$( slider ).on( 'translated.owl.carousel', () => {
					if ( this.el.nativeElement.closest( '.owl-item.active' ) ) {
						if ( this.el.nativeElement.classList.contains( 'appear-animate' ) ) {
							this.el.nativeElement.classList.remove( 'appear-animate' );
							this.player.play();
							this.first = false;
						}
					} else {
						this.el.nativeElement.classList.add( 'appear-animate' );
					}
				} )
			}
		}, 300 );
	}

	@HostListener( 'window: scroll', [ '$event' ] )
	onscroll () {
		this.handleAnimation();
	}

	handleAnimation () {
		const rect = this.el.nativeElement.getBoundingClientRect();

		if ( ( ( window.innerHeight > rect.top && rect.top > 0 ) || ( rect.bottom > 0 && rect.bottom < window.innerHeight ) ) && this.first ) {
			if ( this.el.nativeElement.closest( 'owl-carousel' ) && !this.el.nativeElement.closest( '.owl-item.active' ) ) return;

			this.player.play();
			this.first = false;
		}
	}

	createAnimation () {
		this.player = this.animationBuilder
			.build( [
				style(
					animations[this.aniName][ 'from' ]
				),
				animate(
					this.duration,
					style(
						animations[this.aniName][ 'to' ]
					)
				)
			] )
			.create( this.el.nativeElement );

		this.player.onStart( function () {
			this.el.nativeElement.classList.remove( 'appear-animate' );
		} );
	}
}