import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DynamicModule } from '../dynamic/dynamic.module';
import { GridModule } from './grid-view/grid.module';
import { CheckboxGroupValidator } from './form/checkbox-group-validator.directive';
import { CheckboxGroupComponent } from './form/checkbox-group/checkbox-group.component';
import { NotEmptyValidator } from './form/not-empty-validator.directive';
import { CaptchaModule } from './form/captcha/captcha.module';
import { MdButton, MaterialModule, MdInput, MdCheckbox } from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        DynamicModule,
        GridModule,
        CaptchaModule,
        MaterialModule.forRoot()
    ],
    declarations: [
        CheckboxGroupValidator,
        NotEmptyValidator,
        CheckboxGroupComponent
    ],
    exports: [
        CheckboxGroupValidator,
        NotEmptyValidator,
        CheckboxGroupComponent,
        CommonModule,
        FormsModule,
        DynamicModule,
        GridModule,
        CaptchaModule,

        MdButton,
        MdInput,
        MdCheckbox
    ]
})
export class SharedModule {
}
