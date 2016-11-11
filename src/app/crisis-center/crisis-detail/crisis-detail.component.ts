import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Crisis } from '../crisis';
import { CrisisService } from '../crisis.service';

@Component({
	selector: 'my-crisis-detail',
	templateUrl: './crisis-detail.component.html',
	styleUrls: ['./crisis-detail.component.css']
})
export class CrisisDetailComponent implements OnInit {

	crisis: Crisis;

	constructor(private crisisService: CrisisService,
	            private route: ActivatedRoute,
	            private router: Router) {}

	ngOnInit(): void {
		this.route.params.forEach((params: Params) => {
			let id = +params['id'];
			this.crisisService.getCrisis(id)
				.then(crisis => this.crisis = crisis);
		});
	}

	gotoCrisis(): void {
		let crisisId = this.crisis ? this.crisis.id : null;
		this.router.navigate(['../', { id: crisisId }], { relativeTo: this.route });
	}
}