import { Component } from '@angular/core';

@Component({
	selector: 'molla-login-modal',
	templateUrl: './login-modal.component.html',
	styleUrls: ['./login-modal.component.scss']
})

export class LoginModalComponent  {
	closeModal() {
		const modal = document.querySelector('.login-modal') as HTMLElement;
		if (modal)
			modal.click();
	}
}