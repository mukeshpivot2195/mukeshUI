import {
  kosComponent,
  KosModelCollectionProvider,
  useKosModel,
} from "@coca-cola/kos-ui-components";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useCallback, useEffect, useState } from "react";
import { CLIENT_RENEG_LIMIT } from "tls";
import { Registry } from "./App";
import BrandContainer from "./components/brandContainer";
import LeftScreen from "./components/leftScreen";
import RightScreen from "./components/rightScreen";
import { DispenserFactory } from "./models/dispenser/dispenser-factory";
import { IDispenserModel } from "./models/dispenser/types";

type Routes = "brand" | "beverage";

export const DispenserRoot = kosComponent(() => {
  const { KosModelLoader, status } = useKosModel<IDispenserModel>({
    modelId: DispenserFactory.type,
  });
  return (
    <>
      <KosModelLoader {...status}>
        {/* <BrandContainer /> */}
        <Box className="beverageWrapper">
          <Grid container className="beverageContainer">
            <Grid item xs={6} className="beverageDivider">
              <LeftScreen />
            </Grid>
            <Grid item xs={6}>
              <RightScreen />
            </Grid>
          </Grid>
        </Box>
      </KosModelLoader>
    </>
  );
});
