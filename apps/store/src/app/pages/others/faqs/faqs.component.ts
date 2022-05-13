import { ChangeDetectionStrategy, Component } from '@angular/core';
import { faqGroups } from './faq-data';


@Component({
	selector: 'molla-pages-faqs-page',
	templateUrl: './faqs.component.html',
	styleUrls: ['./faqs.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})

export class FaqsPageComponent {

	faqGroups = faqGroups;

}
