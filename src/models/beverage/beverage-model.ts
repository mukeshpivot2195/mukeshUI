import { kosModel, KosLog, kosDependency } from "@coca-cola/kos-ui-core";
// import {AvailabilityFactory} from "../availability/availabiilty-factory";
import { BeverageFactory } from "./beverage-factory";

const log = KosLog.getLogger("beverage-model");
@kosModel<IBeverageModel, IBeverageOptions>(BeverageFactory.type)
export class BeverageModel implements IBeverageModel {
  id: string;
  name: string;
  icon: string;
  color: string;

  // @kosDependency({modelType: AvailabilityFactory.type})
  // availability!: IAvailabilityModel;

  constructor(modelId: string, options: IBeverageOptions) {
    // assign the id from the passed in model id
    this.id = modelId;
    this.name = options.name;
    this.icon = options.icon;
    this.color = options.color;
  }

  async init(): Promise<void> {
    log.info("initialized beverage model");
    // this.availabilityData = this.availability.getAvailability(this.id);
  }
}
