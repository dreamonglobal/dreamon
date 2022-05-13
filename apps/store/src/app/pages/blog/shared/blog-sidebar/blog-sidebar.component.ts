import { Component, Input } from '@angular/core';
import { environment } from '../../../../../environments/environment';


@Component({
	selector: 'molla-blog-sidebar',
	templateUrl: './blog-sidebar.component.html',
	styleUrls: ['./blog-sidebar.component.scss']
})

export class BlogSidebarComponent {

	@Input() categories: any;
	@Input() toggle = false;
	@Input() single = false;

	SERVER_URL = environment.SERVER_URL;

}
