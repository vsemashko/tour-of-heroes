import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import './shared/rxjs-extensions.ts';
import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ContactModule } from './contact/contact.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { RegistrationModule } from './registration/registration.module';

require('../../public/css/styles.css');

@NgModule({
    imports: [
        BrowserModule,
        CoreModule,
        SharedModule,
        HeroesModule,
        DashboardModule,
        ContactModule,
        RegistrationModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
