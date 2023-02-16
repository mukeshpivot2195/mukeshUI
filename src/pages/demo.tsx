import {
  kosComponent,
  KosModelCollectionProvider,
  useKosModel,
} from "@coca-cola/kos-ui-components";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useCallback, useEffect, useState } from "react";
import { CLIENT_RENEG_LIMIT } from "tls";
<<<<<<< HEAD:src/demo.tsx
import { Registry } from "./App";
import BrandContainer from "./components/brandContainer";
import LeftScreen from "./components/leftScreen";
import RightScreen from "./components/rightScreen";
import { DispenserFactory } from "./models/dispenser/dispenser-factory";
import { IDispenserModel } from "./models/dispenser/types";
import Button from "@mui/material/Button";
import LoginPopup from "./components/loginPopup";

=======
import { Registry } from "../App";
import BrandContainer from "../components/brandContainer";
import LeftScreen from "../components/leftScreen";
import RightScreen from "../components/rightScreen";
import { DispenserFactory } from "../models/dispenser/dispenser-factory";
import { IDispenserModel } from "../models/dispenser/types";
import Button from "@mui/material/Button";
import LoginPopup from "../components/loginPopup";
import AppsIcon from "@mui/icons-material/Apps";
import "./demo.css";
>>>>>>> d8e44c8ff368df1ac284e1492cb4e77a330088ca:src/pages/demo.tsx
type Routes = "brand" | "beverage";

export const DispenserRoot = kosComponent(() => {
  const { KosModelLoader, status } = useKosModel<IDispenserModel>({
    modelId: DispenserFactory.type,
  });

  const [lockPopup, setLockpopup] = useState(false);

<<<<<<< HEAD:src/demo.tsx
  const openPopup =()=>{
    setLockpopup(true)
  }

  return (
    <>
    {
      lockPopup && <LoginPopup lockPopup={lockPopup} setLockpopup={setLockpopup} /> 
    }
      <div>
        <Button variant="contained" onClick={()=>openPopup()}>Contained</Button>
=======
  const openPopup = () => {
    setLockpopup(true);
  };

  return (
    <>
      {lockPopup && (
        <LoginPopup lockPopup={lockPopup} setLockpopup={setLockpopup} />
      )}
      <div className="dashboard-setup-icon">
        <AppsIcon onClick={() => openPopup()}></AppsIcon>
>>>>>>> d8e44c8ff368df1ac284e1492cb4e77a330088ca:src/pages/demo.tsx
      </div>
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
