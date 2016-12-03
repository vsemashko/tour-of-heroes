import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './user.service';
import { LoginRoutingModule } from '../login/login-routing.module';
import { LoginComponent } from '../login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../shared/in-memory-data.service';
import { DialogService } from '../shared/modal-dialog/dialog.service';
import { DynamicModule } from '../dynamic/dynamic.module';
import { COMPILER_PROVIDERS } from '@angular/compiler';

@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        DynamicModule
    ],
    declarations: [
        LoginComponent
    ],
    exports: [
        LoginComponent,
        HttpModule
    ],
    providers: [
        UserService,
        DialogService,
        COMPILER_PROVIDERS
    ]
})
export class CoreModule {
}
