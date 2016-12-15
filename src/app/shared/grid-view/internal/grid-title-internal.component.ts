import { Component, Input, ChangeDetectionStrategy, TemplateRef, Output, EventEmitter } from '@angular/core';
import { SORT_ORDER } from '../grid-api.service';

@Component({
	selector: 'vcm-grid-title-internal',
	templateUrl: 'grid-title-internal.component.html',
	styleUrls: ['grid-title-internal.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridTitleInternalComponent {
	@Input() title: string;
	@Input() titleTemplate: TemplateRef<any>;
	@Input() sortable: boolean;
	@Input() sortOrder: SORT_ORDER;
	@Output() onSort: EventEmitter<SORT_ORDER> = new EventEmitter<SORT_ORDER>();

	sortChange() {
		this.onSort.emit(this.sortOrder === 'desc' ? 'asc' : 'desc');
	}
}