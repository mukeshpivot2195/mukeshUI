import type { IKosReferenceContainer } from "@coca-cola/kos-ui-core";

declare interface IBrandOptions {
  name: string;
  beverageRefs: string[];
}

declare interface IBrandModel extends IBrandOptions, IKosDataModel {
  id: string;
  beverages: IKosReferenceContainer<IBeverageModel>;
}
