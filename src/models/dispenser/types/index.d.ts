import { IKosDataModel, IKosModelContainer } from "@coca-cola/kos-ui-core";
import {NozzleModel} from "../../nozzle";

export interface IDispenserOptions {}

export interface IDispenserModel extends IDispenserOptions, IKosDataModel {
  id: string;
  name: string;
  nozzles: IKosModelContainer<NozzleModel>;
}
