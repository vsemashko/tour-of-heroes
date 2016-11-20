import {
    Component, ComponentRef, ViewChild, ViewContainerRef, AfterViewInit, OnDestroy, OnChanges, SimpleChange,
    ComponentFactory, Input
} from '@angular/core';
import { DynamicComponent, DynamicComponentBuilderService } from './dynamic-compoent-builder.service';

@Component({
    selector: 'vcm-dynamic-view',
    template: `<div #dynamicContentPlaceHolder></div>`,
})
export class DynamicViewComponent implements AfterViewInit, OnDestroy {

    @ViewChild('dynamicContentPlaceHolder', {read: ViewContainerRef})
    protected dynamicComponentTarget: ViewContainerRef;

    protected componentRef: ComponentRef<DynamicComponent>;

    protected wasViewInitialized = false;

     @Input('template')
    set dynamicTemplate(dynamicTemplate: string) {
        this.template = dynamicTemplate;
         if (this.wasViewInitialized) {
             this.refreshContent();
         }
    }

    private template: string;

    constructor(protected dynamicComponentBuilder: DynamicComponentBuilderService) {
    }

    protected refreshContent() {

        if (this.componentRef) {
            this.componentRef.destroy();
        }

        this.dynamicComponentBuilder
            .createComponentFactory(this.template)
            .then((factory: ComponentFactory<DynamicComponent>) => {
                this.componentRef = this
                    .dynamicComponentTarget
                    .createComponent(factory);
            });
    }

    public ngAfterViewInit(): void {
        this.wasViewInitialized = true;
        this.refreshContent();
    }

    public ngOnDestroy() {
        if (this.componentRef) {
            this.componentRef.destroy();
            this.componentRef = null;
        }
    }
}