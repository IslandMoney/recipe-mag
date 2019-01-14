import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe(
            'Nuts & Stuff',
            'Very Tasty',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdWPLdnaI9sYx57_iK5Xu3oXmv_H7yQLn4uKMlxaPEYWpIwSjliw',
        [
            new Ingredient('Nuts', 5),
            new Ingredient('Kanell', 6)
        ]),
        new Recipe(
            'Stuff',
            'Very Tasty',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdWPLdnaI9sYx57_iK5Xu3oXmv_H7yQLn4uKMlxaPEYWpIwSjliw',
        [
            new Ingredient('Nuts', 5),
            new Ingredient('Kanell', 6)
        ])
    ];

    constructor(private shoppingListService: ShoppingListService) {}

    getRecipes(){
        return this.recipes.slice();
    }

    getRecipe(index: number){
        return this.recipes[index];
    }

    addIngredientToSL(ingredients: Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
    }
}