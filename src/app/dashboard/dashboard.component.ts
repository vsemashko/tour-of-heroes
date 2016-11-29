import {Component, OnInit} from "@angular/core";
import { Hero } from '../heroes/hero';
import { HeroService } from '../heroes/hero.service';
import { GridOptions } from '../common/grid-view/grid-options';

@Component({
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {

    heroes: Hero[] = [];
    gridOptions: GridOptions = {};

    constructor(private heroService: HeroService) {
    }

    ngOnInit(): void {
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(0, 4));
    }

    get number() {
        return this.gridOptions.api ? this.gridOptions.api.number : -1;
    }
}