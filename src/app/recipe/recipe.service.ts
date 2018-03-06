import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

import { Recipe } from './recipe.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()

export class RecipeService{
  
  slectedRecipe : EventEmitter<Recipe> = new EventEmitter<Recipe>();

  private recipes : Recipe[] = [
  	new Recipe("A Big Burger",
  	 "Big Burger has a meal that's perfect for you! Choose from turkey, chicken, beef and bison patties for your burger of choice.", 
  	 "http://webiconspng.com/wp-content/uploads/2017/09/Burger-And-Sandwich-PNG-Image-89233.png", 
  	 [new Ingredient("Buns", 2), new Ingredient("Meat", 1), new Ingredient("Tomatoes", 2)] ),

  	new Recipe("Pepperoni Pizza", 
  		"Thinly sliced pepperoni is a popular pizza topping in American-style pizzerias",
  		"https://thumbs.dreamstime.com/z/pizza-rustic-italian-mozzarella-cheese-basil-leaves-35669930.jpg",
  		[new Ingredient("Meat", 6), new Ingredient("Tomatoes", 2), new Ingredient("Crust", 1), new Ingredient("Cheese", 2)]
  		)
  ];

  constructor(private sls : ShoppingListService){}

  getRecipe(){
  	return this.recipes.slice();
  }

  addToShoppingLIst(ingredients : Ingredient[]){
  	this.sls.addIngredientsFromRecipe(ingredients);

  }

}