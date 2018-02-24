import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes : Recipe[] = [
  	new Recipe("Test", "This is a test recipe", "http://s2.thingpic.com/images/2J/YRuJQtWbQFLjHWx7w5MQE9sS.png"),
  	new Recipe("Test 2", "This is a test recipe 2", "http://s2.thingpic.com/images/2J/YRuJQtWbQFLjHWx7w5MQE9sS.png")
  ];

  @Output() sendRecipeDetails = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }

  sendDetailsofRecipe(r : Recipe){
    this.sendRecipeDetails.emit(r);
  }

}
