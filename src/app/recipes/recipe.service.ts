import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Test Recipe', 'Just a test recipe', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdWPLdnaI9sYx57_iK5Xu3oXmv_H7yQLn4uKMlxaPEYWpIwSjliw'),
    ];

    getRecipes(){
        return this.recipes.slice();
    }
}