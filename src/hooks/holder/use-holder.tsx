import { useKosModel } from "@coca-cola/kos-ui-components";
import { Holder, HolderModel } from "../../models/holder";

export const useHolderModel = () => {
  const modelId = Holder.type;
  const result = useKosModel<HolderModel>({
    modelId,
    modelType: Holder.type,
  });

  return result;
};
