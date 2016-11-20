import { Component } from '@angular/core';

@Component({
    selector: 'vcm-dynamic-view-generator',
    template: `
                <h2>Type component markup</h2>
                <textarea #componentHtml [value]="currentTemplate"></textarea>
                <div><button (click)="applyTemplate(componentHtml.value)">Apply Compoennt HTML</button></div>
                <hr />
                <vcm-dynamic-view [template]="currentTemplate"></vcm-dynamic-view>
`,
    styles: [`textarea {width: 500px; height: 100px;}`]
})
export class DynamicViewGeneratorComponent {
    public currentTemplate: string = '<style>h2 {background-color: red}</style><h2>TEXT</h2>';

    constructor() {
    }

    applyTemplate(template: string) {
        this.currentTemplate = template;
    }
}