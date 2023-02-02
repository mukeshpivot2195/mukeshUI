import React from "react";
import Button from "@mui/material/Button";
import BrandContainer from "./brandContainer";
import { useKosModel } from "@coca-cola/kos-ui-components";
import { IBrandModel } from "../models/brand/types";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
interface IGoBack {
  goback?: () => void;
  brandId?: string;
  onSelectBeverage: (id: string) => void;
  selectedBeverage?: string;
}

const BeverageContainer : React.FunctionComponent<IGoBack> = ({
  goback,
  brandId,
  onSelectBeverage,
  selectedBeverage,
}) => {
  const { model } = useKosModel<IBrandModel>({ modelId: brandId });

  const handleBaverageClick = (id: string) => {
    onSelectBeverage(id);
  };

  return (
    <>
      <Box className="beverageBrandWrapper">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Button variant="contained" className="backBtn" onClick={goback}>
              <ArrowBackIosNewIcon /> Back
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Box className="beverageBrandWrapper">
              {model?.beverages.map((item) => {
                return (
                  <Button
                    className={`brandIcons brandImg  ${
                      selectedBeverage === item.id ? "selected" : ""
                    }`}
                    variant="contained"
                    onClick={() => handleBaverageClick(item.id)}
                  >
                    {item.image}
                    <img
                      src={`http://localhost:8081/system/brandset${item.icon}`}
                    />
                  </Button>
                );
              })}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default BeverageContainer;
