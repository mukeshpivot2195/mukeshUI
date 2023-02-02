import { modelFactory } from "@coca-cola/kos-ui-core";
export const BEVERAGE_TYPE = "beverage";
export const BeverageFactory = modelFactory<IBeverageModel, IBeverageOptions>(
  BEVERAGE_TYPE
);
