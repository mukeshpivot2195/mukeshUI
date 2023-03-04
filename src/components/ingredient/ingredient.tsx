import { kosComponent, LoadingMessage } from "@coca-cola/kos-ui-components";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import React, { PropsWithChildren, useState } from "react";
import { useIngredientModel } from "../../hooks/ingredient";
import CloseIcon from "@mui/icons-material/Close";
import "./ingredient.css";
import { useHolderModel } from "../../hooks/holder";
interface Props {}

export const IngredientView: React.FunctionComponent<PropsWithChildren<Props>> =
  kosComponent(function IngredientView() {
    const { status, KosModelLoader } = useIngredientModel();
    const { status: holderStatus, KosModelLoader: holderKosModelLoader } =
      useHolderModel();

    const [selectHolder, setSelectHolder] = useState("");

    const [addIngredient, setAddIngredient] = useState({
      ingredientId: "",
      holderPath: "",
      containerId: "",
    });

    const onHolderClick = (holderId: any, contId: any, id: any, ingId: any) => {
      if (ingId === undefined || ingId==='' ) {
        setSelectHolder(id);
        setAddIngredient({
          ...addIngredient,
          holderPath: holderId,
          containerId: contId,
        });
      }
    };

    const selectIngredient = (id: any) => {
      setSelectHolder("");
      setAddIngredient({
        ...addIngredient,
        ingredientId: id,
      });
      holderStatus.model?.assignIngredientHandler({
        ...addIngredient,
        ingredientId: id,
      });
    };

    const unassignIngredient = (pathId: any) => {
      holderStatus.model?.removeAssignIngredient(pathId);
    };
// console.log(9999,holderStatus)

    return (
      <KosModelLoader {...status} loading={<LoadingMessage></LoadingMessage>}>
        <div>
          <Box sx={{ margin: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography>Valve-Ingrediant Assignment</Typography>
                <Typography>
                  Please select a valve and then select the ingredient you have
                  attached to the valve
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Card sx={{ height: "100%" }}>
                  <CardContent>
                    <Grid container>
                      {holderStatus?.model?.holderData.map(
                        (item: any, index: number) => {
                          return (
                            <Grid item xs={4}>
                              <Box
                                sx={{
                                  display: "flex",
                                  mb: 2,
                                  border: 1,
                                  width: "fit-content",
                                  borderRadius: "4px",
                                }}
                              >
                                <Button
                                  variant="contained"
                                  className={`${
                                    selectHolder === item.name
                                      ? "selected"
                                      : "holder-btn active"
                                  }`}
                                  onClick={() =>
                                    onHolderClick(
                                      item.pumps[0].holderPath,
                                      item.pumps[0].name,
                                      item.name,
                                      item.pumps[0].ingredientId
                                    )
                                  }
                                >
                                  {item.name}
                                </Button>
                                {status?.model?.ingredientData.map(
                                  (data: any, index: any) =>
                                    item.pumps[0].ingredientId === data.id && (
                                      <>
                                        <Typography
                                          component="span"
                                          sx={{
                                            display: "flex",
                                            ml: 1,
                                            alignItems: "center",
                                          }}
                                        >
                                          {data.name}
                                          <CloseIcon
                                            className="closeBtn"
                                            onClick={() =>
                                              unassignIngredient(item.path)
                                            }
                                          ></CloseIcon>
                                        </Typography>
                                      </>
                                    )
                                )}
                              </Box>
                            </Grid>
                          );
                        }
                      )}
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card sx={{ height: "100%" }}>
                  <CardContent>
                    <Grid container>
                      {status?.model?.ingredientData.map(
                        (item: any, index: number) => {
                          return (
                            <Grid item xs={4}>
                              <Button
                                variant="contained"
                                className="ingredient-btn"
                                sx={{ marginBottom: 2 }}
                                onClick={() => selectIngredient(item.id)}
                              >
                                {item.name}
                              </Button>
                            </Grid>
                          );
                        }
                      )}
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
              <Grid
                item
                xs={12}
                className="bottom-btn"
                justifyContent="space-between"
              >
                <Button variant="contained">Pour Valve</Button>
                <Button variant="contained">Done</Button>
              </Grid>
            </Grid>
          </Box>
        </div>
      </KosModelLoader>
    );
  });
