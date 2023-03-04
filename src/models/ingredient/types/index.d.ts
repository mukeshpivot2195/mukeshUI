import { IKosDataModel } from "@coca-cola/kos-ui-core";

export interface IngredientOptions {}

export interface IngredientModel extends IngredientOptions, IKosDataModel {
  id: string;
  holderData : any;
  ingredientData : any;
  addIngredientData : any;
  removeAssignIngredient:any;
  assignIngredientHandler : any
}
