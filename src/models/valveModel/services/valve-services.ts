import { ServiceFactory, resolveServiceUrl } from "@coca-cola/kos-ui-core";
const { URL } = resolveServiceUrl("HOLDER_SERVICE");
const { getAll, postModel, deleteModel } = ServiceFactory.build({
  basePath: `${URL}/api/kos/assignments`,
});


export const getAllValves = async () => {
  
  const response = await getAll<any>({
    urlOverride: `${URL}/api/kos/holders`,
  });
  return response;
};

export const getIngredientList = async () => {
  const response = await getAll<any>({
    urlOverride: `${URL}/api/kos/ingredients`,
  });
  return response; 
};
