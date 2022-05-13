import { Component, Input } from '@angular/core';
import { Post } from '../../../../shared/classes/post';


@Component({
	selector: 'molla-blog-related-posts',
	templateUrl: './related-posts.component.html',
	styleUrls: ['./related-posts.component.scss']
})

export class RelatedPostsComponent {

	@Input() sliderOption: any;
	@Input() posts: Post[] = [];
}
