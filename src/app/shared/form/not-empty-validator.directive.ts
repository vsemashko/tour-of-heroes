import { Directive, forwardRef } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

/**
 * Used for array models, validates that array is not empty
 */

@Directive({
	selector: '[notEmpty][ngModel]',
	providers: [
		{provide: NG_VALIDATORS, useExisting: forwardRef(() => NotEmptyValidator), multi: true}
	]
})
export class NotEmptyValidator implements Validator {
	constructor() {}

	validate(control: AbstractControl): { [key: string]: any } {
		let value: any[] = control.value;

		if (!value || value.length === 0) {
			return {validateNotEmpty: false}
		}

		return null;
	}
}