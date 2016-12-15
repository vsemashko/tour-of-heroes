import {
	Component,
	Input,
	AfterContentInit,
	ContentChildren,
	QueryList,
	ChangeDetectorRef,
	ElementRef,
	Renderer,
	OnDestroy
} from '@angular/core';
import { GridApi, GridOptions, SORT_ORDER } from './grid-api.service';
import { Subscription } from 'rxjs';
import { GridColumn } from './grid-column.directive';

@Component({
	selector: 'vcm-grid',
	templateUrl: 'grid.component.html',
	providers: [GridApi]
})
export class GridComponent implements AfterContentInit, OnDestroy {
	@Input() gridOptions: GridOptions;
	@Input() rows: any[] = [];
	@Input() rowsTrackByKey: string;

	@ContentChildren(GridColumn) columns: QueryList<GridColumn>;

	private _columnsSubscription: Subscription;

	constructor(private detector: ChangeDetectorRef,
	            element: ElementRef,
	            renderer: Renderer,
	            public gridApi: GridApi) {
	}

	ngAfterContentInit() {
		this.gridOptions || (this.gridOptions = {});
		this.gridOptions.api = this.gridApi;
		this._columnsSubscription = this.columns.changes.subscribe(() => this.detector.markForCheck());
	}

	getOrder(column: GridColumn): SORT_ORDER {
		return this.gridApi.sort.key === column.key ? this.gridApi.sort.order : null;
	}

	changeSorting(column: GridColumn, order: SORT_ORDER): void {
		this.gridApi.sort = {key: column.key, order: order};
	}

	columnTrackBy(index: number, column: GridColumn) {
		return column.key || index;
	}

	rowsTrackBy(index: number, data: any) {
		return this.rowsTrackByKey ? data[this.rowsTrackByKey] : index;
	}

	ngOnDestroy() {
		this._columnsSubscription.unsubscribe();
	}
}