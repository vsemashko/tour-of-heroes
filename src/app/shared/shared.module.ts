import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AwesomePipe } from './awesome.pipe';
import { HighlightDirective } from './highlight.directive';
import { DynamicModule } from '../dynamic/dynamic.module';
import { GridModule } from '../common/grid-view/grid.module';
import { CheckboxGroupValidator } from '../common/form/checkbox-group-validator.directive';
import { CheckboxGroupComponent } from '../common/form/checkbox-group/checkbox-group.component';
import { NotEmptyValidator } from '../common/form/not-empty-validator.directive';
import { CaptchaModule } from '../common/form/captcha/captcha.module';

@NgModule({
	imports: [
		CommonModule,
		DynamicModule,
		GridModule,
		CaptchaModule
	],
	declarations: [
		AwesomePipe,
		HighlightDirective,
		CheckboxGroupValidator,
		NotEmptyValidator,
		CheckboxGroupComponent
	],
	exports: [
		AwesomePipe,
		HighlightDirective,
		CheckboxGroupValidator,
		NotEmptyValidator,
		CheckboxGroupComponent,
		CommonModule,
		FormsModule,
		DynamicModule,
		GridModule,
		CaptchaModule
	]
})
export class SharedModule {
}
