import { Component } from '@angular/core';
import { Hero, HeroSkill } from '../../heroes/hero';
@Component({
	selector: 'my-manage-heroes-component',
	templateUrl: './manage-heroes.component.html',
	styleUrls: ['./manage-heroes.component.css']
})
export class ManageHeroesComponent {
	powers = ['Really Smart', 'Super Flexible',
		'Super Hot', 'Weather Changer'];
	skills: HeroSkill[] = this.getSkills();
	model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet', [this.skills[1]]);
	submitted = false;
	active = true;
	verified:boolean = null;

	onSubmit() {
		this.submitted = true;
	}

	newHero() {
		this.model = new Hero(42, '', '');
		this.active = false;
		setTimeout(() => this.active = true, 0);

	}

	private getSkills() {
		return [
			new HeroSkill(1, 'Brutal'),
			new HeroSkill(2, 'Fast'),
			new HeroSkill(3, 'Strong'),
			new HeroSkill(4, 'Smart'),
			new HeroSkill(5, 'Invisible'),
			new HeroSkill(6, 'Flexible')];
	}
}