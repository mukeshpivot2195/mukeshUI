import { IKosDataModel } from "@coca-cola/kos-ui-core";

export interface SelectAndPourOptions {
  nozzle: string;

}

export interface SelectAndPourModel
  extends SelectAndPourOptions,
    IKosDataModel, FutureContainer {
  id: string;
  selected: string;
  isPouring: boolean;
  stop(): Promise<void>;
  pour(): Promise<void>;
  setSelected(path: string): void;
}
