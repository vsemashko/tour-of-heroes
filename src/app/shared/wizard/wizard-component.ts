import { WizardStepsService } from './wizard-step.service';
import { WizardStep } from './wizard-step';

export abstract class WizardComponent {

    constructor(public wizardStepsService: WizardStepsService) {
    }

    abstract canGoNext(): boolean;

    abstract canGoPrevious(): boolean;

    public getCurrentStep(): WizardStep {
        return this.wizardStepsService.getCurrentStep()
    }

    public getSteps(): WizardStep[] {
        return this.wizardStepsService.getSteps();
    }

    public next() {
        this.wizardStepsService.goNext();
    }

    public previous() {
        this.wizardStepsService.goPrevious();
    }

    public hasNext(): boolean {
        return this.wizardStepsService.hasNext();
    }

    public hasPrevious(): boolean {
        return this.wizardStepsService.hasPrevious();
    }

    public trackByStepName(index: number, step: WizardStep) {
        return step.name;
    }

}
