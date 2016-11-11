import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
	selector: 'my-hero-list',
	templateUrl: './hero-list.component.html',
	styleUrls: ['./hero-list.component.css']

})
export class HeroListComponent implements OnInit {
	selectedHero: Hero;
	heroes: Hero[];

	private selectedId: number;

	constructor(private heroService: HeroService,
	            private router: Router,
	            private route: ActivatedRoute) {
	}

	ngOnInit(): void {
		this.route.params.forEach((params: Params) => {
			this.selectedId = +params['id'];
			this.getHeroes();
		});
	}

	add(name: string): void {
		name = name.trim();
		if (!name) {
			return;
		}
		this.heroService.create(name)
			.then(hero => {
				this.heroes.push(hero);
				this.selectedHero = null;
			});
	}

	delete(hero: Hero): void {
		this.heroService
			.delete(hero.id)
			.then(() => {
				this.heroes = this.heroes.filter(h => h !== hero);
				if (this.selectedHero === hero) {
					this.selectedHero = null;
				}
			});
	}

	onSelect(hero: Hero): void {
		this.selectedHero = hero;
	}

	isSelected(hero: Hero) {
		return this.selectedHero ? this.selectedHero.id === hero.id : hero.id === this.selectedId;
	}

	gotoDetail(): void {
		this.router.navigate(['/hero', this.selectedHero.id]);
	}

	private getHeroes(): void {
		this.heroService.getHeroes().then(heroes => this.heroes = heroes);
	}
}
