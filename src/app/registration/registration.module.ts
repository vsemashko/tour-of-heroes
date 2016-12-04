import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RegistrationRoutingModule, REGISTRATION_STEPS } from './registration-routing.module';
import { RegistrationComponent } from './registration.component';
import { RegistrationStep1Component } from './steps/step1/registration-step1.component';
import { RegistrationStep2Component } from './steps/step2/registration-step2.component';
import { WizardModule } from '../shared/wizard/wizard.module';
import { WizardConfigProviderService } from '../shared/wizard/wizard-config-provider.service';
import { RegistrationStep3Component } from './steps/step3/registration-step3.component';
import { UserRolesService } from './steps/step1/user-role.service';
import { RegistrationService } from './registration.service';
import { UserSkillsService } from './steps/step2/user-skills.service';
import { WizardStep } from '../shared/wizard/wizard-step';
import { RegistrationStepConditionalComponent } from './steps/step-conditional/registration-step-conditional.component';


@NgModule({
    imports: [
        SharedModule,
        WizardModule,
        RegistrationRoutingModule
    ],
    declarations: [
        RegistrationComponent,
        RegistrationStep1Component,
        RegistrationStep2Component,
        RegistrationStep3Component,
        RegistrationStepConditionalComponent

    ],
    providers: [
        [{provide: WizardConfigProviderService, useValue: getWizardConfig()}],
        RegistrationService,
        UserRolesService,
        UserSkillsService
    ]
})
export class RegistrationModule {
}

function getWizardConfig() {
    return {
        baseUrl: 'registration/',
        steps: REGISTRATION_STEPS.filter((step: WizardStep) => {
            return step.order >= 0
        })
    }
}