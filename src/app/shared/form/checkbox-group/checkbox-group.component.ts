import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { coerceBooleanProperty } from '@angular/material';

export const CHECKBOX_GROUP_CONTROL_VALUE_ACCESSOR: any = {
	provide: NG_VALUE_ACCESSOR,
	useExisting: forwardRef(() => CheckboxGroupComponent),
	multi: true
};

export class CheckboxGroupChange {
	source: CheckboxGroupComponent;
	checked: any[];
}

@Component({
	selector: 'vcm-checkbox-group',
	templateUrl: 'checkbox-group.component.html',
	styleUrls: ['checkbox-group.component.css'],
	providers: [CHECKBOX_GROUP_CONTROL_VALUE_ACCESSOR]
})
export class CheckboxGroupComponent implements ControlValueAccessor {
	@Input('checkboxes') checkboxes: any[];
	@Input('displayName') displayName: string;
	@Output() change: EventEmitter<CheckboxGroupChange> = new EventEmitter<CheckboxGroupChange>();

	@Input()
	get disabled(): boolean { return this._disabled; }

	set disabled(value) { this._disabled = coerceBooleanProperty(value); }

	private selectedCheckboxes: any[];

	private _controlValueAccessorChangeFn: (value: any) => void = (value) => {};
	private onTouched: () => any = () => {};
	private _disabled: boolean = false;

	constructor() {}

	isSelected(checkbox: string) {
		return this.selectedCheckboxes.includes(checkbox);
	}

	toggleCheckbox(checkbox: string) {
		this.toggleElement(this.selectedCheckboxes, checkbox);
		this._emitChangeEvent();
	}

	getDisplayedName(checkbox: any) {
		return this.displayName ? checkbox[this.displayName] : checkbox;
	}

	/**
	 * Implemented as part of ControlValueAccessor.
	 */
	writeValue(checkboxes: any[]) {
		this.selectedCheckboxes = checkboxes;
	}

	/**
	 * Implemented as part of ControlValueAccessor.
	 */
	registerOnChange(fn: (value: any) => void) {
		this._controlValueAccessorChangeFn = fn;
	}

	/**
	 * Implemented as part of ControlValueAccessor.
	 */
	registerOnTouched(fn: any) {
		this.onTouched = fn;
	}

	/**
	 * Implemented as part of ControlValueAccessor.
	 */
	setDisabledState(isDisabled: boolean) {
		this.disabled = isDisabled;
	}

	_onInputBlur() {
		this.onTouched();
	}

	private toggleElement(array: any[], element: any) {
		var index = array.indexOf(element);
		if (index > -1) {
			array.splice(index, 1);
		}
		else {
			array.push(element)
		}
	}

	private _emitChangeEvent() {
		let event = new CheckboxGroupChange();
		event.source = this;
		event.checked = this.selectedCheckboxes;

		this._controlValueAccessorChangeFn(this.selectedCheckboxes);
		this.change.emit(event);
	}

}