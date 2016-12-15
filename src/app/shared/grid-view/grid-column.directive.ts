import { Input, ContentChild, Directive } from '@angular/core';
import { coerceBooleanProperty } from '@angular/material';
import { GridCell } from './grid-cell.directive';
import { GridColumnTitle } from './grid-column-title.directive';

@Directive({
    selector: 'vcm-grid-column'
})
export class GridColumn {
    @Input() title: string;
    @Input() key: string;
    @Input() classNames: string = '';

    @ContentChild(GridColumnTitle) titleTemplate: GridColumnTitle;
    @ContentChild(GridCell) cellTemplate: GridCell;

    @Input() set sortable(sortable: string | boolean) {
        this._sortable = coerceBooleanProperty(sortable);
    }

    get sortable() {
        return this._sortable;
    }

    private _sortable: boolean = false;
}