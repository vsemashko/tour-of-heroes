import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanDeactivateGuard } from './authentication/can-deactivate-guard.service';

const routes: Routes = [];
@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
	providers: [
		CanDeactivateGuard
	]
})
export class AppRoutingModule {
}
