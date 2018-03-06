import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {	
  
  @ViewChild('nameField') name : ElementRef;
  @ViewChild('amountField') amount : ElementRef;

  constructor(private sls : ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem(){
  	console.log(this.name.nativeElement.value, this.amount.nativeElement.value);
  	this.sls.addIngredient(new Ingredient(this.name.nativeElement.value, this.amount.nativeElement.value));
    this.sls.iteAdded.emit();

  }

}
