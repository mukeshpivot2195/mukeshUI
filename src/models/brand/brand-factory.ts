import { modelFactory } from "@coca-cola/kos-ui-core";
import { IBrandModel, IBrandOptions } from "./types";
export const BRAND_TYPE = "brand";
export const BrandFactory = modelFactory<IBrandModel, IBrandOptions>(
  BRAND_TYPE
);
