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
        {id: 1, name: 'Iron Man'},
        {id: 2, name: 'Hulk'},
        {id: 3, name: 'Flash'},
        {id: 4, name: 'Batman'}
    ];

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