import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { TranscludeComponent } from './transclude.component';
import { DynamicViewGeneratorComponent } from './dynamic-view-generator.component';
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