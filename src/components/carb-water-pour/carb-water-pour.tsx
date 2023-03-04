import { kosComponent, LoadingMessage } from "@coca-cola/kos-ui-components";
import React, { PropsWithChildren, useCallback, useState } from "react";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import {
  Card,
  CardActions,
  CardContent,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import "./carb-water-pour.css";

import { useNavigate } from "react-router-dom";
import { useDispenserModel } from "../../hooks/dispenser";
import { PourButton } from "../pour-button";

interface Props {}

type NozzlePathType = "waterPath" | "carbPath";
export const CarbWaterPourView: React.FunctionComponent<
  PropsWithChildren<Props>
> = kosComponent(function CarbWaterPourView() {
  const { status, KosModelLoader, model: dispenser } = useDispenserModel();

  const navigate = useNavigate();
  const [pour, setPour] = useState<NozzlePathType>("waterPath");

  const handleNozzleBtn = useCallback(
    (event: React.MouseEvent<HTMLElement>, newPour: NozzlePathType | null) => {
      if (newPour !== null) {
        setPour(newPour);
      }
    },
    [setPour]
  );
  const nozzleButtons = dispenser?.nozzles.data.map((item) => {
    return (
      <PourButton key={item.id} nozzle={item} selected={pour}></PourButton>
    );
  });

  return (
    <KosModelLoader {...status} loading={<LoadingMessage></LoadingMessage>}>
      <div>
        <Box>
          <Grid container maxWidth="lg" className="setup-container">
            <Grid item lg={8}>
              <Card>
                <CardContent>
                  <Typography variant="h2">
                    Check Water and Carbonated water
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    gutterBottom
                  >
                    Lets start with water and carbonated water setup for both
                    the nozzles.
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    gutterBottom
                  >
                    Water:
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    gutterBottom
                  >
                    Press pour water and lets it run until you see water is
                    flowing from the nozzle. If it take to long, Check if the
                    water is connected properly
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    gutterBottom
                  >
                    Carbonated Water:
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    gutterBottom
                  >
                    Press pour carb-water and lets it run until you see
                    carbonated water is flowing from the nozzle. If it take to
                    long, Check if the water is connected properly
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    gutterBottom
                  >
                    Once both water and carbonated water is flowing from the
                    nozzle, press proceed
                  </Typography>

                  <Grid container spacing={2} justifyContent="space-between">
                    <Grid item xs={12}>
                      <Box className="nozzle-box">
                        <ToggleButtonGroup
                          defaultValue={"waterPath"}
                          value={pour}
                          exclusive
                          onChange={handleNozzleBtn}
                        >
                          <ToggleButton value="waterPath">
                            Pour Water
                          </ToggleButton>
                          <ToggleButton value="carbPath">
                            Pour Carb Water
                          </ToggleButton>
                        </ToggleButtonGroup>
                      </Box>

                      <Box
                        sx={{ display: "flex", justifyContent: "space-around" }}
                      >
                        {nozzleButtons}
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
                      <CardActions>
                        <Button
                          variant="contained"
                          onClick={() => navigate("/ingredient")}
                        >
                          Proceed
                        </Button>
                      </CardActions>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </div>
    </KosModelLoader>
  );
});
