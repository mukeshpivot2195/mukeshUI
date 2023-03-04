import { IKosDataModel } from "@coca-cola/kos-ui-core";

export interface HolderOptions {}

export interface HolderModel extends HolderOptions, IKosDataModel {
  id: string;
  holderData : any;
  removeAssignIngredient:any;
  addIngredientData : any;
  assignIngredientHandler : any
} 
