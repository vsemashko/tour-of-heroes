import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GridComponent } from './grid.component';
import { GridColumn } from './grid-column.directive';
import { GridColumnInternalComponent } from './internal/grid-column-internal.component';
import { GridCell } from './grid-cell.directive';
import { GridCellInternalComponent } from './internal/grid-cell-internal.component';
import { GridColumnTitle } from './grid-column-title.directive';

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
		GridColumnInternalComponent,
		GridCellInternalComponent
	],
	providers: []
})
export class GridModule {
}