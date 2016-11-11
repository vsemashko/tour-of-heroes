import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Crisis } from '../crisis';
import { CrisisService } from '../crisis.service';

@Component({
	selector: 'my-crisis-list',
	templateUrl: './crisis-list.component.html',
	styleUrls: ['./crisis-list.component.css']

})
export class CrisisListComponent implements OnInit {
	selectedCrisis: Crisis;
	crisises: Crisis[];

	private selectedId: number;

	constructor(private crisisService: CrisisService,
	            private router: Router,
	            private route: ActivatedRoute) {
	}

	ngOnInit(): void {
		this.route.params.forEach((params: Params) => {
			this.selectedId = +params['id'];
			this.getCrisises();
		});
	}

	onSelect(crisis: Crisis): void {
		this.selectedCrisis = crisis;
		this.router.navigate([crisis.id], {relativeTo: this.route});
	}

	isSelected(crisis: Crisis) {
		return this.selectedCrisis ? this.selectedCrisis.id === crisis.id : crisis.id === this.selectedId;
	}

	private getCrisises(): void {
		this.crisisService.getCrisises().then(crisises => this.crisises = crisises);
	}
}
