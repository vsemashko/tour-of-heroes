import { Component, Input } from '@angular/core';

@Component({
    selector: 'my-transcluded', template: `
                <h2>Transcluded content goes here:</h2>
                <ng-content select=".title"></ng-content>
                <hr>
                <ng-content select=".body"></ng-content>
                <hr>
                <ng-content></ng-content>
`
})
export class TranscludeComponent {
    @Input() inner: string;

    constructor() {
    }
}