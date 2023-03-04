import type { IKosRegistry } from "@coca-cola/kos-ui-core";
import { CoreModels } from "@coca-cola/kos-core-model";
import { Dispenser } from "./models/dispenser";
import { Ingredient } from "./models/ingredient";
import {Nozzle} from "./models/nozzle";
import {SelectAndPour} from "./models/select-and-pour";
import { Holder } from "./models/holder";
export const Registry: IKosRegistry = {
  models: {
    ...CoreModels,
    ...Dispenser.registration,
    ...Ingredient.registration,
    ...Nozzle.registration,
    ...SelectAndPour.registration,
    ...Holder.registration
  },
  preloadModels: [Dispenser.type, Ingredient.type, Holder.type ],
};
