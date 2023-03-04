import { kosComponent } from "@coca-cola/kos-ui-components";
import { Button } from "@mui/material";
import { NozzleModel } from "../../models/nozzle";

interface Props {
  nozzle: NozzleModel;
  selected: "waterPath" | "carbPath";
}
export const PourButton: React.FunctionComponent<Props> = kosComponent(
  ({ nozzle, selected }) => {
    return (
      <Button
        style={{ width: 150 }}
        variant="contained"
        color="primary"
        onClick={() => {
          if (nozzle.selectAndPour.isPouring) {
            nozzle.selectAndPour.stop();
          } else {
            const path = nozzle[selected];
            if (path) {
              nozzle.selectAndPour.setSelected(path);
            }

            nozzle.selectAndPour.pour();
          }
        }}
      >
        {!nozzle.selectAndPour.isPouring ? nozzle.description : "Stop"}
      </Button>
    );
  }
);
