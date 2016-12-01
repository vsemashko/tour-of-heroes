import { NgModule } from "@angular/core";
import { GoogleRecaptchaDirective } from './googlerecaptcha.directive';
import { CaptchaComponent } from './captcha.component';

@NgModule({
	imports: [

	],
	declarations: [
		GoogleRecaptchaDirective,
		CaptchaComponent,
	],
	exports: [
		GoogleRecaptchaDirective,
		CaptchaComponent
	]
})
export class CaptchaModule {
}
