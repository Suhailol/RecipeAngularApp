import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
@Injectable()
export class RecipeService{
        constructor(private slService: ShoppingListService){

        }

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test recipe',
         'This is simply a test', 
         'https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
         [ new Ingredient('onions', 2),
        new Ingredient('Brinjall', 4)]),
        new Recipe('A Test recipe',
         'This is simply a test', 
         'https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
         [new Ingredient('bun', 2),
        new Ingredient('meat', 3)])
      ];

    getRecipes(){
        return this.recipes.slice(); //slice coz we only want the copy. Not the reference
    }
    addIngredientsToShoppingList(ingredients: Ingredient[]){
         this.slService.addIngredientsArray (ingredients);
    }
}