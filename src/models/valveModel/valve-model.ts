import {
  kosModel,
  KosLog,
  Kos,
  kosAction,
  kosTopicHandler,
} from "@coca-cola/kos-ui-core";
import { getAllValves, getIngredientList } from "./services";
import { ValveModel, ValveOptions } from "./types";

const MODEL_TYPE = "valve-model";

const log = KosLog.getLogger("valve-model");

@kosModel<ValveModel, ValveOptions>(MODEL_TYPE)
class ValveModelImpl implements ValveModel {
  id: string;
  valveData: any;
  ingredianData: any;

  constructor(modelId: string, options: ValveOptions) {
    this.id = modelId;
  }
  async init(): Promise<void> {
    log.debug("initializing ingredient");
  }

  async load(): Promise<void> {
    const response = await getAllValves();
    kosAction(() => {
      this.valveData = response?.data;
    });
    // const responsein = await getIngredientList();

    // kosAction(() => {
    //   this.ingredianData = responsein?.data;
    // });
  }

  getChildren() {
    return [...this.valveData];
  }
}

const Registration = {
  registration: {
    [MODEL_TYPE]: {
      class: ValveModelImpl,
      singleton: true,
    },
  },
  type: MODEL_TYPE,
  factory: Kos.Factory.create<ValveModel, ValveOptions>(MODEL_TYPE),
};
export default Registration;
