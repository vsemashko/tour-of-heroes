import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { CanDeactivateGuard } from './authentication/can-deactivate-guard.service';
import { AuthGuard } from './authentication/auth-guard.service';

const routes: Routes = [
	{path: '', redirectTo: '/dashboard', pathMatch: 'full'},
	{path: 'crisis-center', loadChildren: 'crisis-center/crisis-center.module#CrisisCenterModule'},
	{path: 'admin', loadChildren: 'admin/admin.module#AdminModule', canLoad: [AuthGuard]}
];
@NgModule({
	imports: [RouterModule.forRoot(routes, {preloadingStrategypreloadingStrategy: PreloadAllModules})],
	exports: [RouterModule],
	providers: [
		CanDeactivateGuard
	]
})
export class AppRoutingModule {
}
