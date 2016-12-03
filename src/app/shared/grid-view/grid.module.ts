import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GridComponent } from './grid.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule
	],
	exports: [
		GridComponent
	],
	declarations: [
		GridComponent
	],
	providers: []
})
export class GridModule {
}