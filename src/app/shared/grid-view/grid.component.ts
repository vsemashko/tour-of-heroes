import {
    Component, Input, AfterContentInit, ContentChildren, QueryList, ChangeDetectorRef, ElementRef, Renderer, OnDestroy
} from '@angular/core';
import { GridApi, GridOptions } from './grid-api.service';
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

    ngOnDestroy() {
        this._columnsSubscription.unsubscribe();
    }

    columnTrackBy(index: number, column: GridColumn) {
        return column.key || index;
    }

    rowsTrackBy(index: number, data: any) {
        return this.rowsTrackByKey ? data[this.rowsTrackByKey] : index;
    }
}