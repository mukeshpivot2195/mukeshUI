import { ServiceFactory, resolveServiceUrl } from "@coca-cola/kos-ui-core";
const { URL } = resolveServiceUrl("SELECT_AND_POUR_SERVICE");
const { postModel } = ServiceFactory.build({
  basePath: `${URL}/api/select-and-pour`,
});


/**
 * @category Service
 * Calls the initialize pump intent for the given nozzle and path.
 */
export const initialize = async (nozzle: string, path: string, tracker?: string) => {
  const response = await postModel({
    model: {},
    urlOverride: `${URL}/api/nozzle/${nozzle}/pipeline/pump/pour/${path}/initialize`,
    tracker,
    ordered: true,
  });


  return response;
};
