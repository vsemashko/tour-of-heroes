import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { TranscludeComponent } from './transclude.component';
import { DynamicViewGeneratorComponent } from './dynamic-view-generator.component';
import { DynamicModule } from '../dynamic/dynamic.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        SharedModule,
        DashboardRoutingModule
    ],
    declarations: [
        DashboardComponent,
        TranscludeComponent,
        DynamicViewGeneratorComponent
    ],
    providers: []
})
export class DashboardModule {
}