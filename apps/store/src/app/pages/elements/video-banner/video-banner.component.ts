import { Component } from '@angular/core';
import { ModalService } from '../../../shared/services/modal.service';


@Component({
	selector: 'molla-elements-video-banner-page',
	templateUrl: './video-banner.component.html',
	styleUrls: ['./video-banner.component.scss']
})

export class VideoBannerPageComponent {

	constructor(private modalService: ModalService) { }

	showModal(event: Event) {
		event.preventDefault();
		this.modalService.showVideoModal();
	}
}