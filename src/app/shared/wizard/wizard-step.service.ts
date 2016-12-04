import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { WizardStep } from './wizard-step';
import { WizardConfigProviderService } from './wizard-config-provider.service';

@Injectable()
export class WizardStepsService {
    private allSteps: WizardStep[];
    private currentStep: WizardStep;
    private baseUrl: string;

    constructor(private router: Router,
                private wizardConfig: WizardConfigProviderService) {
        this.baseUrl = wizardConfig.baseUrl;
        this.allSteps = wizardConfig.steps;
    }

    public getSteps(): WizardStep[] {
        return this.allSteps.slice();
    }

    public setCurrentStep(currentStep: WizardStep): void {
        this.currentStep = currentStep;
    }

    public getCurrentStep(): WizardStep {
        return this.currentStep || this.allSteps[0];
    }

    public getNextStep(): WizardStep {
        return this.getStepByIndex(this.getCurrentStepIndex() + 1);
    }

    public getPreviousStep(): WizardStep {
        return this.getStepByIndex(this.getCurrentStepIndex() - 1);
    }

    public goNext() {
        if (this.hasNext()) {
            this.navigateToStep(this.getNextStep());
        }
    }

    public goPrevious() {
        if (this.hasPrevious()) {
            this.navigateToStep(this.getPreviousStep());
        }
    }

    public insertStep(step: WizardStep, index: number = 0): void {
        this.allSteps.splice(index, 0, step);
    }

    public removeStep(step: WizardStep) {
        this.allSteps.splice(this.allSteps.indexOf(step), 1);
    }

    public hasNext(): boolean {
        return this.allSteps[this.allSteps.length - 1].name !== this.getCurrentStep().name;
    }

    public hasPrevious(): boolean {
        return this.allSteps[0].name !== this.getCurrentStep().name;
    }

    private getStepByIndex(index: number): WizardStep {
        return this.allSteps[index];
    }

    private getCurrentStepIndex(): number {
        return this.allSteps.indexOf(this.getCurrentStep());
    }

    private navigateToStep(step: WizardStep) {
        this.router.navigate([this.baseUrl + step.route.path]);
    }
}
