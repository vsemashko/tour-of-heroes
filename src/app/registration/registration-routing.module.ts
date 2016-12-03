import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration.component';
import { WizardStep, getWizardRoutes } from '../shared/wizard/wizard-step';
import { RegistrationStep1Component } from './steps/step1/registration-step1.component';
import { RegistrationStep2Component } from './steps/step2/registration-step2.component';
import { RegistrationStep3Component } from './steps/step3/registration-step3.component';
import { UserRoleResolve } from './steps/step1/user-role-resolve.service';
import { UserSkillsResolve } from './steps/step2/user-skills-resolve.service';
import { RegistrationGuard } from './registration-guard.service';

export const REGISTRATION_STEPS: WizardStep[] = [
    {
        name: 'Step 1', order: 1,
        route: {
            path: 'step1', component: RegistrationStep1Component,
            resolve: {
                roles: UserRoleResolve
            }
        }
    },
    {
        name: 'Step 2', order: 2,
        route: {
            path: 'step2', component: RegistrationStep2Component,
            resolve: {
                skills: UserSkillsResolve
            }
        }
    },
    {name: 'Step 3', order: 3, route: {path: 'step3', component: RegistrationStep3Component}}
];
export const FIRST_STEP = REGISTRATION_STEPS[0];

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'registration',
                component: RegistrationComponent,
                children: [
                    {path: '', redirectTo: FIRST_STEP.route.path, pathMatch: 'full'},
                    {
                        path: '',
                        canActivateChild: [RegistrationGuard],
                        children: getWizardRoutes(REGISTRATION_STEPS)
                    }
                ]
            },
        ])
    ],
    exports: [
        RouterModule
    ],
    providers: [
        RegistrationGuard,
        UserRoleResolve,
        UserSkillsResolve
    ]
})
export class RegistrationRoutingModule {
}