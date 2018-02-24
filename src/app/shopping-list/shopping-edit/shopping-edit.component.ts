import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {	
  
  @ViewChild('nameField') name : ElementRef;
  @ViewChild('amountField') amount : ElementRef;
  @Output() sendShoppingDetail = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onAddItem(){
  	console.log(this.name.nativeElement.value, this.amount.nativeElement.value);
  	this.sendShoppingDetail.emit(new Ingredient(this.name.nativeElement.value, this.amount.nativeElement.value));

  }

}
