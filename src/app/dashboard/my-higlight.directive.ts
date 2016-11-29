import { Directive, ElementRef, Renderer } from "@angular/core";

@Directive({selector: '[myHighlight]'})
export class HighlightDirective {
	private _defaultColor: string = 'red';

	constructor(private el: ElementRef, private renderer: Renderer) { }

}