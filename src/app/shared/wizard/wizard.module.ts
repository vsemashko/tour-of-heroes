import { NgModule } from '@angular/core';
import { WizardStepResolve } from './wizard-step-resolve.service';
import { WizardStepsService } from './wizard-step.service';

@NgModule({
    imports: [],
    declarations: [],
    providers: [
        WizardStepsService,
        WizardStepResolve
    ]
})
export class WizardModule {
}