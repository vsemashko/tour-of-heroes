import { Injectable } from '@angular/core';

export class Crisis {
	constructor(public id: number, public name: string) { }
}

let CRISIS = [
	new Crisis(11, 'Mr. Nice'),
	new Crisis(12, 'Narco'),
	new Crisis(13, 'Bombasto'),
	new Crisis(14, 'Celeritas'),
	new Crisis(15, 'Magneta'),
	new Crisis(16, 'RubberMan')
];
let crisisPromise = Promise.resolve(CRISIS);
@Injectable()
export class CrisisService {
	getCrisises() { return crisisPromise; }

	getCrisis(id: number | string) {
		return crisisPromise
			.then(crisises => crisises.find(crisis => crisis.id === +id));
	}

}
