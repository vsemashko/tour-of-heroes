import { Component, OnInit, HostBinding, style, state, animate, transition, trigger } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
	selector: 'my-hero-detail',
	templateUrl: './hero-detail.component.html',
	styleUrls: ['./hero-detail.component.css'],
	animations: [
		trigger('routeAnimation', [
			state('*',
				style({
					opacity: 1,
					transform: 'translateX(0)'
				})
			),
			transition(':enter', [
				style({
					opacity: 0,
					transform: 'translateX(-100%)'
				}),
				animate('0.2s ease-in')
			]),
			transition(':leave', [
				animate('0.5s ease-out', style({
					opacity: 0,
					transform: 'translateY(100%)'
				}))
			])
		])
	]
})
export class HeroDetailComponent implements OnInit {

	@HostBinding('@routeAnimation') get routeAnimation() { return true; }

	@HostBinding('style.display') get display() { return 'block'; }

	@HostBinding('style.position') get position() { return 'absolute'; }

	hero: Hero;

	constructor(private heroService: HeroService,
	            private route: ActivatedRoute,
	            private router: Router) {}

	ngOnInit(): void {
		this.route.params.forEach((params: Params) => {
			let id = +params['id'];
			this.heroService.getHero(id)
				.then(hero => this.hero = hero);
		});
	}

	save(): void {
		this.heroService.update(this.hero)
			.then(() => this.gotoHeroes());
	}

	gotoHeroes(): void {
		let heroId = this.hero ? this.hero.id : null;
		this.router.navigate(['/heroes', {id: heroId}]);
	}
}