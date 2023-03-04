import {
  kosModel,
  KosLog,
  Kos,
  kosAction,
  kosTopicHandler,
} from "@coca-cola/kos-ui-core";
import { getallHolders, removeIngredient, updateHolder } from "./services";
import { HolderModel, HolderOptions } from "./types";

const MODEL_TYPE = "holder-model";

const log = KosLog.getLogger("holder-model");

@kosModel<HolderModel, HolderOptions>(MODEL_TYPE)
class HolderModelImpl implements HolderModel {
  id: string;
  holderData: any;
  addIngredientData: any;
  deleteIngredientData: any;

  constructor(modelId: string, options: HolderOptions) {
    this.id = modelId;
  }

  // -------------------LIFECYCLE----------------------------

  async init(): Promise<void> {
    log.debug("initializing holder");
  }

  async load(): Promise<void> {
    const response = await getallHolders();
    kosAction(() => {
      this.holderData = response?.data;
    });
  }
  async assignIngredientHandler(addIngredient: any) {
    updateHolder(addIngredient);
  }
  async removeAssignIngredient(id: any) {
    removeIngredient(id);
  }

  async ready(): Promise<void> {
    log.debug("initializing holder");
  }

  async unload(): Promise<void> {
    log.debug("initializing holder");
  }

  async activate(): Promise<void> {
    log.debug("initializing holder");
  }

  async deactivate(): Promise<void> {
    log.debug("initializing holder");
  }
  @kosTopicHandler({ topic: "/kos/assignments/add", websocket: true })
  addAssignment(update: any) {
    this.holderData.forEach((item: any) => {
      if (item.pumps[0].holderPath === update.holderPath) {
        item.pumps[0].ingredientId = update.ingredientId;
      }
    });
  }
  @kosTopicHandler({ topic: "/kos/assignments/remove", websocket: true })
  removeAssignment(update: any) {
    console.log(999999,update)
    this.holderData.forEach((item: any) => {
      if (item.pumps[0].holderPath === update.holderPath) {
        item.pumps[0].ingredientId = '';
      }
    });
  }

  getChildren() {
    return [...this.holderData];
  }
}

const Registration = {
  registration: {
    [MODEL_TYPE]: {
      class: HolderModelImpl,
      singleton: true,
    },
  },
  type: MODEL_TYPE,
  factory: Kos.Factory.create<HolderModel, HolderOptions>(MODEL_TYPE),
};
export default Registration;
