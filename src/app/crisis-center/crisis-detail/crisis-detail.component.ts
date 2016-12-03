import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CrisisService, Crisis } from '../crisis.service';
import { DialogService } from '../../shared/modal-dialog/dialog.service';

@Component({
	selector: 'my-crisis-detail',
	templateUrl: './crisis-detail.component.html',
	styleUrls: ['./crisis-detail.component.css']
})
export class CrisisDetailComponent implements OnInit {

	crisis: Crisis;
	editName: string;

	constructor(private crisisService: CrisisService,
	            private route: ActivatedRoute,
	            private router: Router,
	            private dialogService: DialogService) {}

	ngOnInit(): void {
		this.route.data.forEach((data: { crisis: Crisis }) => {
			this.editName = data.crisis.name;
			this.crisis = data.crisis;
		});
	}

	cancel() {
		this.gotoCrises();
	}

	save() {
		this.crisis.name = this.editName;
		this.gotoCrises();
	}

	gotoCrises(): void {
		let crisisId = this.crisis ? this.crisis.id : null;
		this.router.navigate(['../', {id: crisisId}], {relativeTo: this.route});
	}

	canDeactivate(): Promise<boolean> | boolean {
		// Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
		if (!this.crisis || this.crisis.name === this.editName) {
			return true;
		}
		// Otherwise ask the user with the dialog service and return its
		// promise which resolves to true or false when the user decides
		return this.dialogService.confirm('Discard changes?');
	}
}