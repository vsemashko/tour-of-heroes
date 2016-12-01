import { Directive, ElementRef, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

declare var grecaptcha: any;

@Directive({
	selector: '[googlerecaptcha]',
	providers: [NgModel],
	host: {
		'(input)': 'onInputChange()'
	}
})
export class GoogleRecaptchaDirective implements OnInit {
	@Input('theme') theme: string = '';
	@Input('siteKey') siteKey: string;
	@Output('setVerified') setVerified: EventEmitter<any> = new EventEmitter();
	@Output('setTimeExpired') setTimeExpired: EventEmitter<any> = new EventEmitter();
	modelValue: any;
	private _el: HTMLElement;

	constructor(el: ElementRef, private model: NgModel) {
		this._el = el.nativeElement;
		this.modelValue = this.model;
		var input = this._el;

	}

	ngOnInit() {
		setTimeout(() => {
			grecaptcha.render(this._el, {
				'sitekey': this.siteKey,
				'callback': (data: any) => {
					if (data) {
						this.setVerified.emit(true);
					}
				},
				'theme': this.theme,
				'expired-callback': (data: any) => {
					this.setTimeExpired.emit(null);
				}
			});
		}, 10)
	};

	onInputChange() {
	}
}