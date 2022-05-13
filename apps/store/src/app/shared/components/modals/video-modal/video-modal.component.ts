import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component( {
	selector: 'molla-video-modal',
	templateUrl: './video-modal.component.html',
	styleUrls: [ './video-modal.component.scss' ]
} )

export class VideoModalComponent {

	constructor ( private modalService: NgbActiveModal ) {
	}

	closeModal () {
		this.modalService.dismiss();
	}
}