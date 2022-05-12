import { Component } from '@angular/core';
import { ApiService } from '../../../shared/services/api.service';
import { ModalService } from '../../../shared/services/modal.service';
import { UtilsService } from '../../../shared/services/utils.service';
import { bannerSlider, brandSlider, introSlider, testiSlider } from '../data';



@Component({
	selector: 'molla-index',
	templateUrl: './index.component.html',
	styleUrls: ['./index.component.scss']
})

export class IndexComponent {

	products = [];
	posts = [];
	loaded = false;
	introSlider = introSlider;
	brandSlider = brandSlider;
	testiSlider = testiSlider;
	bannerSlider = bannerSlider;

	constructor(public apiService: ApiService, public utilsService: UtilsService, private modalService: ModalService) {
		this.modalService.openNewsletter();

		this.apiService.fetchHomeData().subscribe(result => {
			this.products = result.products;
			this.posts = result.blogs;
			this.loaded = true;
		})
	}
}
