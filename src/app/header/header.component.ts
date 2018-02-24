import { Component, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: 'header.component.html'
})

export class HeaderComponent{
	@Output() snedFeature = new EventEmitter<string>();

	featureSelected(feature:string){
		this.snedFeature.emit(feature);
	}
	
}

