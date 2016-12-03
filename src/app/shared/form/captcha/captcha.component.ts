import { Component, forwardRef, Input, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const CAPTCHA_CONTROL_VALUE_ACCESSOR: any = {
	provide: NG_VALUE_ACCESSOR,
	useExisting: forwardRef(() => CaptchaComponent),
	multi: true
};

@Component({
	selector: 'vcm-captcha',
	templateUrl: 'captcha.component.html',
	styleUrls: ['captcha.component.css'],
	providers: [CAPTCHA_CONTROL_VALUE_ACCESSOR]
})
export class CaptchaComponent implements ControlValueAccessor {
	@Input('siteKey') siteKey: string = "6Lf1MQ0UAAAAACeJ0mVZ0rv9P4Fv0ggyJes-5eXa"; //TODO move to configs
	@Input('theme') theme: string = "light";

	@Output() change: EventEmitter<boolean> = new EventEmitter<boolean>();

	private verified: boolean = null;
	private _controlValueAccessorChangeFn: (value: any) => void = (value) => {};

	constructor() {}

	setVerified(verified: boolean) {
		this.verified = verified;
		this._emitChangeEvent(verified);
	}

	/**
	 * Implemented as part of ControlValueAccessor.
	 */
	writeValue(verified: boolean) {
		this.verified = verified;
	}

	/**
	 * Implemented as part of ControlValueAccessor.
	 */
	registerOnChange(fn: (value: any) => void) {
		this._controlValueAccessorChangeFn = fn;
	}

	/**
	 * TODO implement if needed
	 */
	registerOnTouched(fn: any) {}

	setDisabledState(isDisabled: boolean) {}

	private _emitChangeEvent(verified: boolean) {
		this._controlValueAccessorChangeFn(this.verified);
		this.change.emit(verified);
	}
}
