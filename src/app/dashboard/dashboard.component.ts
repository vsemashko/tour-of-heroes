import { Component, OnInit } from '@angular/core';
import { Hero } from '../heroes/hero';
import { HeroService } from '../heroes/hero.service';
import { GridOptions } from '../shared/grid-view/grid-api.service';

@Component({
	selector: 'my-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	heroes: Hero[] = [];
	gridOptions: GridOptions = {};
	rows: any[] = [
		{id: 2, name: 'Hulk', skill: 'strong'},
		{id: 1, name: 'Iron Man', skill: 'flying'},
		{id: 3, name: 'Flash', skill: 'fast'},
		{id: 4, name: 'Batman', skill: 'fighter'},
		{id: 5, name: 'Superman', skill: 'immortal'}
	];

	constructor(private heroService: HeroService) {
	}

	ngOnInit(): void {
		this.heroService.getHeroes()
			.then(heroes => this.heroes = heroes.slice(0, 4));
	}
}