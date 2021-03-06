import {Recipe} from "./recipe.model";
import {Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('A Test recipe','this is simply a test',
      'https://www.forkinthekitchen.com/' +
      'wp-content/uploads/2021/04/210324.whipped.ricotta.update-5845-5.jpg',
      [
        new Ingredient('Meat',1),
        new Ingredient('French Fries',20)

      ]),
    new Recipe('Recipe 2','recipe descr','https://www.forkinthekitchen.com/' +
      'wp-content/uploads/2021/04/210324.whipped.ricotta.update-5845-5.jpg',
      [
        new Ingredient('Buns',2),
        new Ingredient('Meat',1)
      ])
  ];

  constructor(private slService: ShoppingListService) {
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
