import { Component, Input, AfterContentInit } from '@angular/core';
import { GridApi } from './grid-api.service';
import { GridOptions } from './grid-options';

@Component({
	selector: 'vcm-grid',
	templateUrl: './grid.component.html',
	providers: [GridApi]
})
export class GridComponent implements AfterContentInit {
	@Input() gridOptions: GridOptions;
	@Input() rows: any[];

	constructor(public gridApi: GridApi) {

	}

	ngAfterContentInit(): void {
		this.gridOptions || (this.gridOptions = {});
		this.gridOptions.api = this.gridApi;
		this.gridApi.number++;
	}

	get number() {
		return this.gridApi.number;
	}

	increment() {
		this.gridApi.number++;
	}
}