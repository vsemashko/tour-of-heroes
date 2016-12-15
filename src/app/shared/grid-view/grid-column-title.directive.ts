import { Directive, TemplateRef } from '@angular/core';

@Directive({
    selector: 'template[vcm-grid-title]'
})
export class GridColumnTitle {
    constructor(public templateRef: TemplateRef<any>) {
    }
}