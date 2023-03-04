import { kosModel, KosLog, Kos, kosAction } from "@coca-cola/kos-ui-core";
import {SelectAndPour, SelectAndPourModel} from "../select-and-pour";
import {getNozzleInfo} from "./services";

import { NozzleModel, NozzleOptions } from "./types";

const MODEL_TYPE = "nozzle-model";

const log = KosLog.getLogger("nozzle-model");


@kosModel<NozzleModel, NozzleOptions>(MODEL_TYPE)
class NozzleModelImpl implements NozzleModel {
  id: string;
  name: string;
  nozzleName?: string;
  waterPath?: string;
  carbPath?: string;
  description: string;

  selectAndPour!: SelectAndPourModel;

  constructor(modelId: string, options: NozzleOptions) {
    this.id = modelId;
    this.name = options.name;
    
    this.description = options.description;
  }

  // -------------------LIFECYCLE----------------------------

  /**
   * Initialize the model by getting the nozzle info from the server.
   * The nozzle info contains the name of the nozzle, the water path and the carb path.
   * The name of the nozzle is the alias for the nozzle info defined as part of the dispenser assembly.
   * The water path and carb path are the handle paths to the water and carb pumps for the nozzle.
   * 
   * This pattern allows for changes in the pump information without requiring a change in 
   * the model code.
   * 
   */
  async init(): Promise<void> {
    log.debug("initializing nozzle");
    const info = await getNozzleInfo(this.name);
    if (info?.data) {
      const { nozzleName, waterPath, carbPath } = info.data;
      kosAction(() => {
        this.nozzleName = nozzleName;
        this.waterPath = waterPath;
        this.carbPath = carbPath;
      });
    }
    this.selectAndPour = SelectAndPour.factory(`select-and-pour-${this.id}`)({
      nozzle: this.nozzleName!
    });

  }


  getChildren() {
    return [this.selectAndPour];
  }

}

const Registration = {
  registration: {
    [MODEL_TYPE]: {
      class: NozzleModelImpl,
      singleton: false,
    },
  },
  type: MODEL_TYPE,
  factory: Kos.Factory.create<NozzleModel, NozzleOptions>(MODEL_TYPE),
};
export default Registration;
