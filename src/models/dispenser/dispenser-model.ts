import { kosModel } from "@coca-cola/kos-ui-core";
import { DispenserFactory } from "./dispenser-factory";
import { kosAction, KosLog, KosModelContainer } from "@coca-cola/kos-ui-core";
import { IKosModelContainer } from "@coca-cola/kos-ui-core";
import { BrandsetResponse, IDispenserModel, IDispenserOptions } from "./types";
import { getBrandset } from "./services/dispenser-services";
import { BrandFactory } from "../brand/brand-factory";
import { IBrandModel } from "../brand/types";
import { BeverageFactory } from "../beverage/beverage-factory";

const log = KosLog.getLogger("dispenser-model");
@kosModel<IDispenserModel, IDispenserOptions>(DispenserFactory.type)
export class DispenserModel implements IDispenserModel {
  id: string;
  brandset?: BrandsetResponse;
  beverages: IKosModelContainer<IBeverageModel>;
  brands: IKosModelContainer<IBrandModel>;

  constructor(modelId: string) {
    // assign the id from the passed in model id
    this.id = modelId;
    this.beverages = new KosModelContainer();
    this.brands = new KosModelContainer();
  }

  async init(): Promise<void> {
    console.log("initialized model");
  }

  async load(): Promise<void> {
    try {
      // log.info("loading dispenser model");
      const response = await getBrandset(this.id);
      log.debug(`received response ${response}`);
      kosAction(() => {
        this.brandset = response as unknown as BrandsetResponse;

        // use response?.data once the uiSchema is sourced from an endpoint.
        this.brandset?.beverages.forEach((beverage) => {
          const beverageModel = BeverageFactory.build(String(beverage.id), {
            name: beverage.name,
            icon: beverage.icon,
            color: beverage.color,
          });
          this.beverages.addModel(beverageModel);
        });
        this.brandset?.brands.forEach((brand) => {
          const brandModel = BrandFactory.build(String(brand.id), {
            name: brand.name,
            beverageRefs: brand.beverages.map((b: string) => String(b)),
          });
          this.brands.addModel(brandModel);
        });
      });

      // alternately could call updateName rather than using the kosAction closure.
    } catch (e) {
      log.error(e);
      throw e;
    }
  }
}
