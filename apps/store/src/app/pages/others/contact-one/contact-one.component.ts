import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
import { catchError, map } from 'rxjs/operators';

@Component({
	selector: 'molla-pages-contact-one',
	templateUrl: './contact-one.component.html',
	styleUrls: ['./contact-one.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})

export class ContactOnePageComponent {
	apiLoaded: Observable<boolean>;
  
	constructor(httpClient: HttpClient) {
		this.apiLoaded = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyBzlLYISGjL_ovJwAehh6ydhB56fCCpPQw', 'callback')
		.pipe(
			map(() => true),
			catchError(() => of(false)),
		);
	}
}