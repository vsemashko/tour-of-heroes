import {NgModule} from "@angular/core";
import {ContactComponent} from "./contact.component";
import {ContactService} from "./contact.service";
import {SharedModule} from "../shared/shared.module";
import {ContactRoutingModule} from "./contact.routing.module";

@NgModule({
    imports: [
        SharedModule,
        ContactRoutingModule
    ],
    declarations: [
        ContactComponent,
    ],
    providers: [
        ContactService
    ]
})
export class ContactModule {
}
