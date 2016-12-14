import { Directive, TemplateRef } from '@angular/core';

@Directive({
    selector: 'template[vcm-grid-cell]'
})
export class GridCell {
    constructor(public templateRef: TemplateRef<any>) {}
}