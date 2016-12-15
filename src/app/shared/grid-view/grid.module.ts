import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GridComponent } from './grid.component';
import { GridColumn } from './grid-column.directive';
import { GridTitleInternalComponent } from './internal/grid-title-internal.component';
import { GridCell } from './grid-cell.directive';
import { GridCellInternalComponent } from './internal/grid-cell-internal.component';
import { GridColumnTitle } from './grid-column-title.directive';
import { OrderByPipe } from './order/order-by.pipe';
import { FilterByPipe } from './filter/filter-by.pipe';
import { SearchPipe } from './filter/search.pipe';

const GRID_DIRECTIVES = [
	GridComponent,
	GridColumn,
	GridCell,
	GridColumnTitle
];

@NgModule({
	imports: [
		CommonModule,
		FormsModule
	],
	exports: [
		GRID_DIRECTIVES
	],
	declarations: [
		GRID_DIRECTIVES,
		GridTitleInternalComponent,
		GridCellInternalComponent,
		OrderByPipe,
		FilterByPipe,
		SearchPipe
	],
	providers: []
})
export class GridModule {
}