import { NgModule } from "@angular/core";
import { CaptchaComponent } from './captcha.component';
import { ReCaptchaModule } from 'angular2-recaptcha';

@NgModule({
	imports: [
		ReCaptchaModule
	],
	declarations: [
		CaptchaComponent,
	],
	exports: [
		CaptchaComponent
	]
})
export class CaptchaModule {
}
