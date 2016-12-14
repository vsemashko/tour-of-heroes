import { Component, Input, ChangeDetectionStrategy, TemplateRef, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'vcm-grid-column-internal',
    templateUrl: 'grid-column-internal.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridColumnInternalComponent {
    @Input() heading: string;
    @Input() headingTemplate: TemplateRef<any>;
    @Input() sortable: boolean;
    @Input() sortOrder: 'asc' | 'desc';
    @Output() onSort = new EventEmitter();

    sortChange() {
        this.onSort.emit(this.sortOrder === 'desc' ? 'asc' : 'desc');
    }
}