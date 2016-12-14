import { Input, ContentChild, Directive } from '@angular/core';
import { coerceBooleanProperty } from '@angular/material';
import { GridCell } from './grid-cell.directive';
import { GridHeading } from './grid-heading.directive';

@Directive({
    selector: 'vcm-grid-column'
})
export class GridColumn {
    @Input() heading: string;
    @Input() key: string;

    @ContentChild(GridHeading) headingTemplate: GridHeading;
    @ContentChild(GridCell) cellTemplate: GridCell;

    @Input() set sortable(sortable: string | boolean) {
        this._sortable = coerceBooleanProperty(sortable);
    }

    get sortable() {
        return this._sortable;
    }

    private _sortable: boolean = false;
}