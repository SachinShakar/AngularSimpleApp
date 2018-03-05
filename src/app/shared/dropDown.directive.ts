import { Directive, 
	ElementRef, 
	Renderer2, 
	HostListener, 
	HostBinding} 
from "@angular/core";

@Directive({
	selector : "[appDropDown]"
})

export class DropDownDirective{

	@HostBinding("class.open") displaying = false;
	//displaying : boolean = false;

	constructor(private eleRef : ElementRef, private renderer : Renderer2){

	}

	@HostListener('click') toggleView(event : Event){
		// if(!this.displaying){
		// 	this.displaying = true;
		// 	this.renderer.addClass(this.eleRef.nativeElement, "open");
		// }
		// else{
		// 	this.displaying = false;
		// 	this.renderer.removeClass(this.eleRef.nativeElement, "open");
		// }
		this.displaying = !this.displaying	
	}



} 