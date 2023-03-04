import { ServiceFactory, resolveServiceUrl } from "@coca-cola/kos-ui-core";
const { URL } = resolveServiceUrl("INGREDIENT_SERVICE");
const { getAll, postModel, deleteModel } = ServiceFactory.build({
  basePath: `${URL}/api/kos/assignments`,
});

interface IngredientResponse {
  id: string;
}
/**
 * @category Service
 * Retrieves the initial Ingredient data.
 */

export const getallHolders = async () => {
  const response = await getAll<any>({
    urlOverride: `${URL}/api/kos/holders`,
  });
  return response;
};

export const getallIngredient = async () => {
  const response = await getAll<any>({
    urlOverride: `${URL}/api/kos/ingredients`,
  });
  return response;
};

export const updateHolder = async (addIngredient: any) => {
  const response = await postModel<any>({
    model: addIngredient,
    urlOverride: `${URL}/api/kos/assignments`,
  });
  return response;
};

export const removeIngredient = async (id: any) => {
  const response = await deleteModel({ id });
  return response;
}; 
