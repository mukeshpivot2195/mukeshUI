import { useKosModel } from "@coca-cola/kos-ui-components";
import { Valve, ValveModel } from "../../models/valveModel";

export const useValveModel = () => {
  const modelId = Valve.type;
  const result = useKosModel<ValveModel>({
    modelId,
    modelType: Valve.type,
  });

  return result;
};
