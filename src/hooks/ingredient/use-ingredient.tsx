import { useKosModel } from "@coca-cola/kos-ui-components";
import { Ingredient, IngredientModel } from "../../models/ingredient";

export const useIngredientModel = () => {
  const modelId = Ingredient.type;
  const result = useKosModel<IngredientModel>({
    modelId,
    modelType: Ingredient.type,
  });

  return result;
};
