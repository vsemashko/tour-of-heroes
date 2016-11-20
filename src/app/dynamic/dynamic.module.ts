import { NgModule } from '@angular/core';
import { DynamicComponentBuilderService } from './dynamic-compoent-builder.service';
import { DynamicViewComponent } from './dynamic-view.comonent';

@NgModule({
    imports: [],
    declarations: [DynamicViewComponent],
    exports: [DynamicViewComponent],
    providers: [DynamicComponentBuilderService]
})

export class DynamicModule {
}