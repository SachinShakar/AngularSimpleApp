import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  feature = "recipe";

  captureFeature(feature:string){
  	this.feature = feature;
  }
}
