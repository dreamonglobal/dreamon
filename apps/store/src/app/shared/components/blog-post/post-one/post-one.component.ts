import { Component, OnInit, Input } from '@angular/core';

import { Post } from '../../../../shared/classes/post';

import { ModalService } from '../../../../shared/services/modal.service';

import { sliderOpt } from '../../../../shared/data';
import { environment } from '../../../../../environments/environment';

@Component({
	selector: 'molla-post-one',
	templateUrl: './post-one.component.html',
	styleUrls: ['./post-one.component.scss']
})

export class PostOneComponent implements OnInit {

	@Input() post: Post;
	@Input() adClass = '';
	@Input() isContent = true;
	@Input() isAuthor = true;

	sliderOption = { ...sliderOpt, loop: false };
	SERVER_URL = environment.SERVER_URL;
	paddingTop = '100%';

	constructor(private modalService: ModalService) { }

	ngOnInit(): void {
		this.paddingTop = Math.floor((parseFloat(this.post.image[0].height.toString()) / parseFloat(this.post.image[0].width.toString()) * 1000)) / 10 + '%';
	}

	showModal(event: Event) {
		event.preventDefault();
		this.modalService.showVideoModal();
	}
}