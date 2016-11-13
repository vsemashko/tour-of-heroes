import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserService } from "./user.service";
import { LoginRoutingModule } from "../login/login-routing.module";
import { LoginComponent } from "../login/login.component";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "../common/in-memory-data.service";
import { DialogService } from "../common/modal-dialog/dialog.service";
@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
    ],
    declarations: [LoginComponent],
    exports: [LoginComponent, HttpModule],
    providers: [
        UserService,
        DialogService
    ]
})
export class CoreModule {
}
