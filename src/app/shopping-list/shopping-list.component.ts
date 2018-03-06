import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: []
})
export class ShoppingListComponent implements OnInit {
  
  ingredients : Ingredient[] = [];
  
  constructor(private sls : ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.sls.getIngredients();
    this.sls.iteAdded.subscribe( () => { 
      this.ingredients = this.sls.getIngredients();

    });
  }

  
}
