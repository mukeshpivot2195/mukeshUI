import {
  kosModel,
  KosLog,
  IKosReferenceContainer,
  KosReferenceContainer,
  kosDependency,
} from "@coca-cola/kos-ui-core";
// import {AvailabilityFactory} from "../availability/availabiilty-factory";
import { BrandFactory } from "./brand-factory";
import { IBrandModel, IBrandOptions } from "./types";

const log = KosLog.getLogger("beverage-model");
@kosModel<IBrandModel, IBrandOptions>(BrandFactory.type)
export class BrandModel implements IBrandModel {
  id: string;
  name: string;
  beverageRefs: string[];
  beverages: IKosReferenceContainer<IBeverageModel>;

  // @kosDependency({modelType: AvailabilityFactory.type})
  // availability!: IAvailabilityModel;

  constructor(modelId: string, options: IBrandOptions) {
    // assign the id from the passed in model id
    this.id = modelId;
    this.name = options.name;
    this.beverageRefs = options.beverageRefs;
    this.beverages = new KosReferenceContainer();
  }

  async init(): Promise<void> {
    log.info("initialized beverage model");
    this.beverageRefs.forEach((ref) => {
      this.beverages.addModel(ref);
    });
  }

  async ready() {
    return this.beverages.whenReady();
  }
}
