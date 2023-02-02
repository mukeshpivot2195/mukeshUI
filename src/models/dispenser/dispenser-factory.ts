import { modelFactory } from "@coca-cola/kos-ui-core";
import { IDispenserModel } from "./types";
export const DISPENSER_TYPE = "dispenser";
export const DispenserFactory = modelFactory<IDispenserModel, {}>(
  DISPENSER_TYPE
);
