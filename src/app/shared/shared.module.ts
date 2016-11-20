import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AwesomePipe } from './awesome.pipe';
import { HighlightDirective } from './highlight.directive';
import { DynamicModule } from '../dynamic/dynamic.module';

@NgModule({
    imports: [
        CommonModule,
        DynamicModule
    ],
    declarations: [
        AwesomePipe,
        HighlightDirective
    ],
    exports: [
        AwesomePipe,
        HighlightDirective,
        CommonModule,
        FormsModule,
        DynamicModule
    ]
})
export class SharedModule {
}
