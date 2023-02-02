import { ServiceFactory, resolveServiceUrl } from "@coca-cola/kos-ui-core";
import { BrandsetResponse } from "../types";

const { URL } = resolveServiceUrl("DISPENSER_SERVICE");
const { getOne } = ServiceFactory.build({
  destinationAddress: "",
  basePath: `${URL}/system/brandset/uiSchema.json`,
});

/**
 * @category Service
 * Retrieves the initial dispenser data.
 */
export const getBrandset = async (id: string) => {
  const response = await getOne<BrandsetResponse>({});
  return response;
};
