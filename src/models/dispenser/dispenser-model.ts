import { kosModel, KosLog, Kos, KosModelContainer, IKosModelContainer } from "@coca-cola/kos-ui-core";
import { IDispenserModel, IDispenserOptions } from "./types";
import {Nozzle, NozzleModel} from "../nozzle";

const MODEL_TYPE = "dispenser-model";

const log = KosLog.getLogger("dispenser-model");

@kosModel<IDispenserModel, IDispenserOptions>(MODEL_TYPE)
class DispenserModel implements IDispenserModel {
  id: string;
  name: string;
  nozzles: IKosModelContainer<NozzleModel>;
  constructor(modelId: string, options: IDispenserOptions) {
    this.id = modelId;
    this.name = "";
    this.nozzles = new KosModelContainer<NozzleModel>({indexMap: {
      name: "name"
    }});

  }

  // -------------------LIFECYCLE----------------------------

  /**
   * Initialize the model by creating the required nozzles for the dispenser
   * passing in the name and description of the nozzle. The name is the alias for
   * the nozzle info defined as part of the dispenser assembly.  The description is 
   * a human readable label of the nozzle that will be used in the UI.
   * 
   * For this example we are creating two nozzles, left and right corresponding to the
   * two nozzles defined in the dispenser assembly.
   * 
   */
  async init(): Promise<void> {
    log.debug("initializing dispenser");
    const leftNozzle = Nozzle.factory("assembly.core.board:leftNozzle")({
      name: "left",
      description: "Left Nozzle",
      
    });
    this.nozzles.addModel(leftNozzle);

    const rightNozzle = Nozzle.factory("assembly.core.board:rightNozzle")({
      name: "right",
      description: "Right Nozzle",
     
    });
    this.nozzles.addModel(rightNozzle);


  }

  async load(): Promise<void> {
    log.debug("loading dispenser");

  }

  getChildren() {
    return this.nozzles.data;
  }
}

const Registration = {
  registration: {
    [MODEL_TYPE]: {
      class: DispenserModel,
      singleton: true,
    },
  },
  type: MODEL_TYPE,
  factory: Kos.Factory.create<IDispenserModel, IDispenserOptions>(MODEL_TYPE),
};
export default Registration;
