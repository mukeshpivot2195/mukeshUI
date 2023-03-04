import { kosModel, KosLog, Kos } from "@coca-cola/kos-ui-core";
import { FutureAware, FutureHandler, kosFuture} from "@coca-cola/kos-core-model"
import {initialize} from "./services";

import { SelectAndPourModel, SelectAndPourOptions } from "./types";

const MODEL_TYPE = "select-and-pour-model";

const log = KosLog.getLogger("select-and-pour-model");



/**
 * The SelectAndPourModel is responsible for managing the state of ingredient selection
 * and the pouring for a given nozzle.
 * 
 * Select and pour implements the FutureAware interface which allows it to have methods that
 * are decorated with the kosFuture decorator.  These two components combine to allow a model to interact 
 * with async calls to the backend with minimal effort.
 *
 */
@kosModel<SelectAndPourModel, SelectAndPourOptions>(MODEL_TYPE)
class SelectAndPourModelImpl implements SelectAndPourModel {
  id: string;
  selected: string;
  nozzle: string;

  futureHandler: FutureAware;

  constructor(modelId: string, options: SelectAndPourOptions) {
    this.id = modelId;
    this.selected = "";
    this.nozzle = options.nozzle;
    this.futureHandler = new FutureHandler();
  }


  setSelected(path: string) {
    this.selected = path;
  }

  get isPouring() {
    return this.futureHandler.status === "IN_PROGRESS";
  }


  // -------------------LIFECYCLE----------------------------

  async stop() : Promise<void> {
    log.debug("stopping nozzle");
    await this.futureHandler?.cancel();
  }

  /**
   * Pour the selected ingredient
   * The kosFuture decorator is used to encapsulate the async call to the backend
   * It will wrap the method and instantiate a future using a tracker that will passed
   * into this method.  The future will be stored in the futureHandler and can be accessed
   * via the futureHandler property.
   * 
   * @param tracker - the tracker to use for the future
   * @returns a promise that resolves when the pour intent has been successfully called
   * @throws Error if the ingredient is not selected or if the nozzle is already pouring
   */
  @kosFuture()
  async pour(tracker?: string): Promise<void> {
    log.debug("priming nozzle");

    if (!this.selected) {
      throw new Error("No ingredient selected");
    }

    if (this.isPouring) {
      throw new Error("Nozzle is already pouring");
    }
    try {
      return await initialize(this.nozzle, this.selected, tracker) as unknown as Promise<void>;

      
    } catch (e) {
      log.error(e);
      throw e;
    }
    
  }
}

const Registration = {
  registration: {
    [MODEL_TYPE]: {
      class: SelectAndPourModelImpl,
      singleton: false,
    },
  },
  type: MODEL_TYPE,
  factory: Kos.Factory.create<SelectAndPourModel, SelectAndPourOptions>(
    MODEL_TYPE
  ),
};
export default Registration;
