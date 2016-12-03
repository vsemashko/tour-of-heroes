import { Injectable } from '@angular/core';
import { WizardStep } from './wizard-step';

@Injectable()
export class WizardConfigProviderService {
    public baseUrl: string;
    public steps: WizardStep[];
}