import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalService } from '../../../../shared/services/modal.service';
import { UtilsService } from '../../../../shared/services/utils.service';


@Component({
	selector: 'molla-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})

export class HeaderComponent {

	@Input() containerClass = "container";

	wishCount = 0;

	constructor(public activeRoute: ActivatedRoute, public utilsService: UtilsService, public modalService: ModalService) {
	}

	showLoginModal(event: Event): void {
		event.preventDefault();
		this.modalService.showLoginModal();
	}
}
