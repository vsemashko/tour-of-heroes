import { Route } from '@angular/router';
import { WizardStepResolve } from './wizard-step-resolve.service';

export interface WizardStep {
    name: string;
    order: number;
    route: Route;
}

export function getWizardRoutes(wizardSteps: WizardStep[]) {
    return wizardSteps.map((step: WizardStep) => {
        let route = step.route;
        appendCommonResolves(route);
        return route;
    });
}

function appendCommonResolves(route: Route) {
    route.resolve || (route.resolve = {});
    route.resolve['step'] = WizardStepResolve;
}