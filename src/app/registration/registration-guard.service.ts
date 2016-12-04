import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';
import { RegistrationService } from './registration.service';
import { WizardStepsService } from '../shared/wizard/wizard-step.service';
import { WizardConfigProviderService } from '../shared/wizard/wizard-config-provider.service';

@Injectable()
export class RegistrationGuard implements CanActivateChild {
    constructor(private router: Router,
                private registrationService: RegistrationService,
                private wizardService: WizardStepsService,
                private wizardConfig: WizardConfigProviderService) {
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.isFirstStep(childRoute) || this.isStepAvailable(childRoute)) {
            return true;
        }
        this.router.navigate([this.wizardConfig.baseUrl + this.getFirstStep().route.path]);
        return false;
    }

    private isFirstStep(childRoute: ActivatedRouteSnapshot) {
        let firstStep = this.getFirstStep();
        return firstStep.route.component === childRoute.component;
    }

    private isStepAvailable(childRoute: ActivatedRouteSnapshot) {
        let availableSteps = this.registrationService.availableSteps;
        for (let i = 0; i < availableSteps.length; i++) {
            let step = availableSteps[i];
            if (step.route.component === childRoute.component) {
                return true;
            }
        }
        return false;
    }

    private getFirstStep() {
        return this.wizardService.getSteps()[0];
    }
}