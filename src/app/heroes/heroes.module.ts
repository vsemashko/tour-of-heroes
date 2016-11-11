import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroService } from './hero.service';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroRoutingModule } from './heroes-routing.module';
import { HeroSearchComponent } from './hero-search/hero-search.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		HeroRoutingModule
	],
	declarations: [
		HeroListComponent,
		HeroDetailComponent,
		HeroSearchComponent
	],
	providers: [
		HeroService
	]
})
export class HeroesModule {
}