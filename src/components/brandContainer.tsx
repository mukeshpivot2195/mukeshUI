import { useContextModel } from "@coca-cola/kos-ui-components";
import React from "react";
import { IDispenserModel } from "../models/dispenser/types";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Container } from "@mui/system";
import "./brandset.css";
interface IBrandContainer {
  beverageId?: any;
}

const BrandContainer : React.FunctionComponent<IBrandContainer> = ({ beverageId }) => {
  const model = useContextModel<IDispenserModel>();

  return (
    <Container className="left-container">
      <Grid container spacing={2}>
        {model?.brands.map((item, index) => {
          return (
            <>
              <Grid item>
                <Button
                  variant="contained"
                  className="brandIcons"
                  onClick={() => beverageId(item.id)}
                >
                  {item.name}
                </Button>
              </Grid>
            </>
          );
        })}
      </Grid>
    </Container>
  );
};

export default BrandContainer;
