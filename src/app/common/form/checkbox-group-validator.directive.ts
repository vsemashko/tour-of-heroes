import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, Validators, ValidatorFn } from '@angular/forms';

/**
 * Validator for checkbox group
 * Works for underlying checkbox inputs with ngModel specified
 *
 * */

@Directive({
  selector: '[hasRequiredCheckboxInGroup]',
  providers: [{provide: NG_VALIDATORS, useExisting: CheckboxGroupValidator, multi: true}]
})
export class CheckboxGroupValidator implements Validator, OnChanges {
  private valFn = Validators.nullValidator;

  constructor() {
    this.valFn = validateRequiredCheckboxInGroup();
  }

	ngOnChanges(changes: SimpleChanges): void {}

	validate(control: AbstractControl): {[key: string]: any} {
    return this.valFn(control);
  }
}

function validateRequiredCheckboxInGroup() : ValidatorFn {
	return (group:any) => {
		let isValid = false;
		if(group) {
			for(let ctrl in group.controls) {
				console.log(group.controls[ctrl]);
				if(group.controls[ctrl].value && typeof group.controls[ctrl].value === 'boolean') {
					isValid = group.controls[ctrl].value;
				}
			}
		}

		if(isValid) {
			return null;
		} else {
			return { checkboxRequired: true };
		}
	}
}