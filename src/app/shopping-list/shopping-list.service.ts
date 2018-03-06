import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';


export class ShoppingListService{
  iteAdded = new EventEmitter<void>();

  private ingredients : Ingredient[] = [
  	new Ingredient('Apple', 5),
  	new Ingredient('Tommatoes', 10)
  ];

  getIngredients(){
  	return this.ingredients.slice();
  }


  addIngredient(item : Ingredient){
  	this.ingredients.push(item);
  }

  addIngredientsFromRecipe(items : Ingredient[]){
    this.ingredients.push(...items);
    this.iteAdded.emit();
  }
}