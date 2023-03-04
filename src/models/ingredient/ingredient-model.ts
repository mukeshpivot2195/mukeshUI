import { kosModel, KosLog, Kos, kosAction } from "@coca-cola/kos-ui-core";
import {
  getallHolders,
  getallIngredient,
  removeIngredient,
  updateHolder,
} from "./services";
import { IngredientModel, IngredientOptions } from "./types";

const MODEL_TYPE = "ingredient-model";

const log = KosLog.getLogger("ingredient-model");

@kosModel<IngredientModel, IngredientOptions>(MODEL_TYPE)
class IngredientModelImpl implements IngredientModel {
  id: string;
  holderData: any;
  ingredientData: any;
  addIngredientData: any;
  deleteIngredientData: any;
  constructor(modelId: string, options: IngredientOptions) {
    this.id = modelId;
  }

  // -------------------LIFECYCLE----------------------------

  async init(): Promise<void> {
    log.debug("initializing ingredient");
  }

  async assignIngredientHandler(addIngredient: any) {
    const response = await updateHolder(addIngredient);
    kosAction(() => {
      this.addIngredientData = response?.data;
    });
  }

  async removeAssignIngredient(id: any) {
    const response = await removeIngredient(id);
    kosAction(() => {
      this.deleteIngredientData = response;
    });
  }

  async load(): Promise<void> {
    const response = await getallHolders();
    kosAction(() => {
      this.holderData = response?.data;
    });

    const result = await getallIngredient();
    kosAction(() => {
      this.ingredientData = result?.data;
    });
  }

  async ready(): Promise<void> {
    log.debug("initializing ingredient");
  }

  async unload(): Promise<void> {
    log.debug("initializing ingredient");
  }

  async activate(): Promise<void> {
    log.debug("initializing ingredient");
  }

  async deactivate(): Promise<void> {
    log.debug("initializing ingredient");
  }
}

const Registration = {
  registration: {
    [MODEL_TYPE]: {
      class: IngredientModelImpl,
      singleton: true,
    },
  },
  type: MODEL_TYPE,
  factory: Kos.Factory.create<IngredientModel, IngredientOptions>(MODEL_TYPE),
};
export default Registration;
