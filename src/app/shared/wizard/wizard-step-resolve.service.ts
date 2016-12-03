import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { WizardStepsService } from './wizard-step.service';
import { WizardStep } from './wizard-step';

@Injectable()
export class WizardStepResolve implements Resolve<void> {
    constructor(private wizardService: WizardStepsService) {
    }

    resolve(route: ActivatedRouteSnapshot): Promise<void> {
        this.wizardService.getSteps().forEach((step: WizardStep) => {
            if (step.route.component === route.component) {
                this.wizardService.setCurrentStep(step);
            }
        });
        return Promise.resolve();
    }
}
