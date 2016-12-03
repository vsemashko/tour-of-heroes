import { Component, OnInit } from '@angular/core';
import { WizardComponent } from '../shared/wizard/wizard-component';
import { WizardStepsService } from '../shared/wizard/wizard-step.service';
import { RegistrationService } from './registration.service';

@Component({
    selector: 'vcm-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css']

})
export class RegistrationComponent extends WizardComponent implements OnInit {

    constructor(public wizardStepsService: WizardStepsService,
                public registrationService: RegistrationService) {
        super(wizardStepsService);
    }

    ngOnInit(): void {
    }

    public next(): any {
        this.registrationService.addAvailableStep(this.wizardStepsService.getNextStep());
        return super.next();
    }

    canGoNext(): boolean {
        return this.registrationService.canGoNext;
    }

    canGoPrevious(): boolean {
        return true;
    }
}