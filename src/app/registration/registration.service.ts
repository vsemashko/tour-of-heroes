import { Injectable } from '@angular/core';
import { User } from './user';
import { NgForm } from '@angular/forms';
import { WizardStep } from '../shared/wizard/wizard-step';

@Injectable()
export class RegistrationService {

    private _user: User = new User();
    private _currentForm: NgForm;
    private availableSteps: WizardStep[] = [];

    constructor() {
    }

    set currentForm(value: NgForm) {
        this._currentForm = value;
    }

    getAvailableSteps(): WizardStep[] {
        return this.availableSteps;
    }

    addAvailableStep(stepName: WizardStep) {
        this.availableSteps.push(stepName);
    }

    get user(): User {
        return this._user;
    }

    get canGoNext(): boolean {
        return this._currentForm && this._currentForm.valid;
    }
}
