import {Component} from "@angular/core";
import {Hero} from "../../heroes/hero";
@Component({
    selector: 'my-manage-heroes-component',
    templateUrl: './manage-heroes.component.html',
    styleUrls: ['./manage-heroes.component.css']
})
export class ManageHeroesComponent {
    powers = ['Really Smart', 'Super Flexible',
        'Super Hot', 'Weather Changer'];
    model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
    submitted = false;
    active = true;

    onSubmit() {
        this.submitted = true;
    }

    newHero() {
        this.model = new Hero(42, '', '');
        this.active = false;
        setTimeout(() => this.active = true, 0);

    }
}
