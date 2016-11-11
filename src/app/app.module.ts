import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "./app-routing.module";
import "./common/rxjs-extensions.ts";
import {AppComponent} from "./app.component";
import {HeroesModule} from "./heroes/heroes.module";
import {DashboardModule} from "./dashboard/dashboard.module";
import {DialogService} from "./common/modal-dialog/dialog.service";
import {ContactModule} from "./contact/contact.module";
import {CoreModule} from "./core/core.module";

require('../../public/css/styles.css');

@NgModule({
    imports: [
        BrowserModule,
        CoreModule,
        HeroesModule,
        DashboardModule,
        ContactModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        DialogService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
