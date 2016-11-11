import { Component, NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { CrisisCenterComponent } from './crisis-center.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';
import { CrisisCenterHomeComponent } from './crisis-center-home.component';

@NgModule({
	imports: [
		RouterModule.forChild([
			{
				path: '',
				redirectTo: '/crisis-center',
				pathMatch: 'full'
			},
			{
				path: 'crisis-center',
				component: CrisisCenterComponent,
				children: [
					{
						path: '',
						component: CrisisListComponent,
						children: [
							{
								path: ':id',
								component: CrisisDetailComponent
							},
							{
								path: '',
								component: CrisisCenterHomeComponent
							}
						]
					}
				]
			}
		])
	],
	exports: [
		RouterModule
	]
})
export class CrisisCenterRoutingModule {
}
