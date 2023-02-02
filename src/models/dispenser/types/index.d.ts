import type { IKosModelContainer } from "@coca-cola/kos-ui-core";

declare interface IDispenserOptions {}

declare interface IDispenserModel extends IDispenserOptions, IKosDataModel {
  id: string;
  brandset?: BrandsetResponse;
  beverages: IKosModelContainer<IBeverageModel>;
  brands: IKosModelContainer<IBrandModel>;
}

declare interface BrandsetResponse {
  brands: BrandResponse[];
  beverages: BeverageResponse[];
}
