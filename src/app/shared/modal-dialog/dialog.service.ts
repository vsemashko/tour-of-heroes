import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class DialogService {

	confirm(message: string): Promise<boolean> {
		return new Promise((resolve, reject) => {
			var result = confirm(message);
			resolve(result);
		});
	}
}
