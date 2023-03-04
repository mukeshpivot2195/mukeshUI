import { useKosModel } from "@coca-cola/kos-ui-components";
import { Nozzle, NozzleModel } from "../../models/nozzle";

export const useNozzleModel = () => {
  const modelId = Nozzle.type;
  const result = useKosModel<NozzleModel>({
    modelId,
    modelType: Nozzle.type,
  });

  return result;
};
