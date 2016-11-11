import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import './common/rxjs-extensions.ts';
import { AppComponent } from './app.component';
import { InMemoryDataService } from './common/in-memory-data.service';
import { HeroesModule } from './heroes/heroes.module';
import { CrisisCenterModule } from './crisis-center/crisis-center.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { AdminModule } from './admin/admin.module';
import { LoginRoutingModule } from './login/login-routing.module';
import { LoginComponent } from './login/login.component';
import { DialogService } from './common/modal-dialog/dialog.service';

require('../../public/css/styles.css');

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		InMemoryWebApiModule.forRoot(InMemoryDataService),

		HeroesModule,
		CrisisCenterModule,
		DashboardModule,
		AdminModule,
		LoginRoutingModule,

		AppRoutingModule
	],
	declarations: [
		AppComponent,
		LoginComponent
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
