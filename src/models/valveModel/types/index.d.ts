import { IKosDataModel } from "@coca-cola/kos-ui-core";

export interface ValveOptions {}

export interface ValveModel extends ValveOptions, IKosDataModel {
  id: string;
  valveData : any;
  ingredianData: any;
} 
