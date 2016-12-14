import { Directive, TemplateRef } from '@angular/core';

@Directive({
    selector: 'template[vcm-grid-heading]'
})
export class GridHeading {
    constructor(public templateRef: TemplateRef<any>) {
    }
}