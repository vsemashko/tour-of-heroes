import { Injectable } from '@angular/core';
import { User } from './user';
import { NgForm } from '@angular/forms';
import { WizardStep } from '../shared/wizard/wizard-step';
import { REGISTRATION_STEPS } from './registration-routing.module';
import { WizardStepsService } from '../shared/wizard/wizard-step.service';

@Injectable()
export class RegistrationService {

    private _user: User = new User();
    private _currentForm: NgForm;
    private _availableSteps: WizardStep[] = [];

    constructor(private wizardService: WizardStepsService) {
    }

    set currentForm(value: NgForm) {
        this._currentForm = value;
    }

    get availableSteps(): WizardStep[] {
        return this._availableSteps;
    }

    addAvailableStep(stepName: WizardStep) {
        this._availableSteps.push(stepName);
    }

    get user(): User {
        return this._user;
    }

    get canGoNext(): boolean {
        return this._currentForm && this._currentForm.valid;
    }

    manageAdditionalStep(isAdd: boolean, stepName: string, stepOrder: number = -1) {
        if (isAdd) {
            let additionalStep = this.findStep(stepName);
            additionalStep.order = stepOrder;
            this.wizardService.insertStep(additionalStep, stepOrder);
        } else {
            this.wizardService.removeStep(this.findStep(stepName));
        }
    }

    hasStep(stepName: string): boolean {
        let step = this.findInSteps(this.wizardService.getSteps(), stepName);
        return !!step;
    }

    private findStep(stepName: string): WizardStep {
        return this.findInSteps(REGISTRATION_STEPS, stepName);
    }

    private findInSteps(steps: WizardStep[], stepName: string) {
        return steps.find((step: WizardStep) => {
            return step.name === stepName
        });
    }
}
