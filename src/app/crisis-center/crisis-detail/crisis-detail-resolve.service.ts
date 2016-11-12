import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { CrisisService, Crisis } from '../crisis.service';

@Injectable()
export class CrisisDetailResolve implements Resolve<Crisis> {
	constructor(private service: CrisisService,
	            private router: Router) {}

	resolve(route: ActivatedRouteSnapshot): Promise<Crisis>|boolean {
		let id = +route.params['id'];
		return this.service.getCrisis(id).then(crisis => {
			if (crisis) {
				return crisis;
			} else { // id not found
				this.router.navigate(['/crisis-center']);
				return null;
			}
		});
	}
}
