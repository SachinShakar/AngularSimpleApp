import { Component, OnInit, Input } from '@angular/core';
import {Recipe } from '../recipe.model';
import { RecipeService} from '../recipe.service';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() getRecipe : Recipe;


  constructor(private recipeService : RecipeService) { }

  ngOnInit() {
  }

  addToShoppingLIst(){
  	this.recipeService.addToShoppingLIst(this.getRecipe.ingredients);

  }

}
