import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
// import * as Cookie from 'js-cookie';
import { environment } from '../../../../../environments/environment';



@Component({
	selector: 'dreamon-molla-newsletter-modal',
	templateUrl: './newsletter-modal.component.html',
	styleUrls: ['./newsletter-modal.component.scss']
})

export class NewsletterModalComponent {

	checkState = false;

	constructor(private modalService: NgbActiveModal) { }

	changeCheck() {
		this.checkState = !this.checkState;
	}

	closeModal() {
		this.modalService.dismiss();
		// this.checkState && Cookie.set(`hideNewsletter-${environment.demo}`, "true", { expires: 7 });
	}
}