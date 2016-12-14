import { Component, ChangeDetectionStrategy, OnChanges, Input, TemplateRef } from '@angular/core';

@Component({
    selector: 'vcm-grid-cell-internal',
    templateUrl: 'grid-cell-internal.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridCellInternalComponent implements OnChanges {
    @Input() row: any;
    @Input() cellTemplate: TemplateRef<any>;
    @Input() key: string;
    @Input() index: number;

    context: any;

    ngOnChanges(changes?: any) {
        this.context = {
            $implicit: this.value,
            row: this.row,
            index: this.index,
        };
    }

    get value() {
        return this.key ? this.row[this.key] : null;
    }
}