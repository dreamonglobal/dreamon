import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { Post } from '../../../shared/classes/post';
import { sliderOpt } from '../../../shared/data';
import { ApiService } from '../../../shared/services/api.service';
import { ModalService } from '../../../shared/services/modal.service';
import { UtilsService } from '../../../shared/services/utils.service';
import { postSlider1 } from '../shared/data';





@Component( {
	selector: 'molla-blog-single-fluid-page',
	templateUrl: './single-fluid.component.html',
	styleUrls: [ './single-fluid.component.scss' ]
} )

export class SingleFluidPageComponent {

	post: Post;
	prevPost: Post;
	nextPost: Post;
	loaded = false;
	relatedPosts = [];
	sliderOption1 = postSlider1;
	sliderOption2 = { ...sliderOpt, loop: false };
	SERVER_URL = environment.SERVER_URL;
	paddingTop = '100%';

	constructor ( public activeRoute: ActivatedRoute, private apiService: ApiService, public utilsService: UtilsService, private modalService: ModalService ) {
		this.activeRoute.params.subscribe( params => {
			this.loaded = false;

			this.apiService.fetchSinglePost( params[ 'slug' ] ).subscribe( result => {
				this.post = result.blog;
				this.relatedPosts = result.relatedBlogs;
				this.prevPost = result.prevBlog;
				this.nextPost = result.nextBlog;
				this.paddingTop = Math.floor( ( parseFloat( this.post.image[ 0 ].height.toString() ) / parseFloat( this.post.image[ 0 ].width.toString() ) * 1000 ) ) / 10 + '%';

				this.loaded = true;
			} );
		} );
	}

	trackByFn ( index: number, item: any ) {
		if ( !item ) return null;
		return item.slug;
	}

	showModal ( event: Event ) {
		event.preventDefault();
		this.modalService.showVideoModal();
	}
}
