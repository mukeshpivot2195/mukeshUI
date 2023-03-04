import { ServiceFactory, resolveServiceUrl } from "@coca-cola/kos-ui-core";
const { URL } = resolveServiceUrl("NOZZLE_SERVICE");
const { getOne } = ServiceFactory.build({
  basePath: `${URL}/api/system/test/info/`,
});

interface NozzleResponse {
  nozzleName: string;
  waterPath: string;
  carbPath: string;
}
/**
 * @category Service
 * Retrieves the initial Nozzle data from the backend.
 * 
 * The nozzle info was defined in the Lancer app
 */
export const getNozzleInfo = async (name: string) => {
  const response = await getOne<NozzleResponse>({
    urlOverride: `${URL}/api/system/test/info/${name}`,
  });
  return response;
};
