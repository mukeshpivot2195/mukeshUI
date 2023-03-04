import { IKosDataModel } from "@coca-cola/kos-ui-core";
import {SelectAndPourModel} from "../../select-and-pour";

export interface NozzleOptions {
  name: string;
  description: string;

}

export interface NozzleModel extends NozzleOptions, IKosDataModel {
  id: string;
  selectAndPour: SelectAndPourModel;
  waterPath?: string;
  carbPath?: string;
  nozzleName?: string;
}
