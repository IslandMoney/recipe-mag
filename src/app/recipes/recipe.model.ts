import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
    public name: string;
    public desciption: string;
    public imagePath: string;
    public ingredients: Ingredient[];

    constructor(name: string, description: string, imagePath: string, ingredients: Ingredient[]){
        this.name = name;
        this.desciption = description;
        this.imagePath = imagePath;
        this.ingredients = ingredients;
    }
}