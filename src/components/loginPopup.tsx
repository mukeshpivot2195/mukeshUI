import React, { useState } from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { numb } from "../utils/number";
import { FormControl, InputAdornment, OutlinedInput } from "@mui/material";
import { useNavigate } from "react-router-dom";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import { Box } from "@mui/system";
import "./loginPopup.css";
interface ILoginPopUp {
  lockPopup: boolean;
  setLockpopup: any;
}

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

const LoginPopup = (props: ILoginPopUp) => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  const handleChange = (prop: any) => (event: any) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleClose = () => {
    props.setLockpopup(false);
    navigate("/setup");
  };

  const [data, setData] = useState("");

  const handleClick = (item: number) => {
    setData(data + item);
  };
  const backspace = () => {
    const back = data.slice(0, -1);
    setData(back);
  };
  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };

  return (
    <div>
      <BootstrapDialog
        onClose={() => props.setLockpopup(false)}
        aria-labelledby="customized-dialog-title"
        open={props.lockPopup}
        className="password-modal"
      >
        <DialogContent dividers>
          <Typography variant="body1" color="text.secondary">
            Please Enter Password
          </Typography>
          <Box>
            <FormControl variant="outlined" className="password-input">
              <OutlinedInput
                id="outlined-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={data}
                onChange={handleChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Box>
          <Box className="password-btn">
            {numb.map((item, index) => {
              return (
                <Button variant="outlined" onClick={() => handleClick(item)}>
                  {item}
                </Button>
              );
            })}
            <Button variant="contained" onClick={() => backspace()}>
              back
            </Button>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose}>
            Enter
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
};
export default LoginPopup;
