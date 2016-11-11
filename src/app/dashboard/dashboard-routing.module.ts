import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HeroSearchComponent } from '../heroes/hero-search/hero-search.component';

@NgModule({
	imports: [
		RouterModule.forChild([
			{
				path: 'dashboard',
				component: DashboardComponent,
				children: [
					{
						path: '',
						component: HeroSearchComponent
					}
				]
			}
		])
	],
	exports: [
		RouterModule
	]
})
export class DashboardRoutingModule {
}
