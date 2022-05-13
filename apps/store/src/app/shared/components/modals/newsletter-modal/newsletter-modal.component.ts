import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../../../../environments/environment';



@Component({
	selector: 'molla-newsletter-modal',
	templateUrl: './newsletter-modal.component.html',
	styleUrls: ['./newsletter-modal.component.scss']
})

export class NewsletterModalComponent {

	checkState = false;

	constructor(private modalService: NgbActiveModal, private readonly cookieService: CookieService) { }

	changeCheck() {
		this.checkState = !this.checkState;
	}

	closeModal() {
		this.modalService.dismiss();
		this.checkState && this.cookieService.set(`hideNewsletter-${environment.demo}`, "true", { expires: 7 });
	}
}