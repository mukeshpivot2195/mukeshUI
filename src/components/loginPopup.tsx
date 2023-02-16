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
<<<<<<< HEAD

=======
import { useNavigate } from "react-router-dom";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import { Box } from "@mui/system";
import "./loginPopup.css";
>>>>>>> d8e44c8ff368df1ac284e1492cb4e77a330088ca
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
<<<<<<< HEAD
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    props.setLockpopup(false);
=======
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
>>>>>>> d8e44c8ff368df1ac284e1492cb4e77a330088ca
  };

  return (
    <div>
<<<<<<< HEAD
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button> */}
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={props.lockPopup}
      >
        <DialogContent dividers>
        <FormControl sx={{ m: 1, width: "50ch" }} variant="outlined">
              <OutlinedInput
                id="outlined-adornment-password"
                // type={values.showPassword ? "text" : "password"}
                // value={data}
                // onChange={handleChange("password")}
=======
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
>>>>>>> d8e44c8ff368df1ac284e1492cb4e77a330088ca
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
<<<<<<< HEAD
                      // onClick={handleClickShowPassword}
                      // onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {/* {values.showPassword ? <VisibilityOff /> : <Visibility />} */}
=======
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
>>>>>>> d8e44c8ff368df1ac284e1492cb4e77a330088ca
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
<<<<<<< HEAD
        {numb.map((item, index)=>{
          return (
            <Button variant="outlined">{item}</Button>
          )
        })}
          
          
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
=======
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
>>>>>>> d8e44c8ff368df1ac284e1492cb4e77a330088ca
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
};
export default LoginPopup;
