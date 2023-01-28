import {
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Box,
  Alert,
} from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import { useRegisterUserMutation } from "../../service/Api";
import { storeToken } from "../../service/LocalStorageService.js";
const Registration = () => {
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: "",
  });
  const Navigate = useNavigate();
  const [registerUser] = useRegisterUserMutation();
  const [once, setOnce] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      name: data.get("name"),
      email: data.get("email"),
      password: data.get("password"),
      password_confirmation: data.get("password_confirmation"),
      tc: data.get("tc"),
    };
    // Navigate("/Home");
    if (
      actualData.name &&
      actualData.email &&
      actualData.password &&
      actualData.password_confirmation &&
      actualData.tc !== null
    ) {
      if (actualData.password === actualData.password_confirmation) {
        const res = await registerUser(actualData);
        console.log(res.data.status);
        if (res.data.status === "success") {
          console.log("Sign In ");
          storeToken(res.data.token);
          Navigate("/Home");
        }
        if (res.data.status === "failed") {
          setError({ status: true, msg: res.data.message, type: "error" });
        }
      } else {
        setError({
          status: true,
          msg: "Password and Confirm Password Doesn't Match",
          type: "error",
        });
      }
    } else {
      setError({ status: true, msg: "All Fields are Required", type: "error" });
    }
  };
  return (
    <>
      <div className="formMain">
        <div className="formContainer">
          <Box
            component="form"
            noValidate
            sx={{ mt: 1 }}
            id="registration-form"
            onSubmit={handleSubmit}
            className="box"
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              name="name"
              label="Name"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              name="email"
              label="Email Address"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="password_confirmation"
              name="password_confirmation"
              label="Confirm Password"
              type="password"
            />
            <FormControlLabel
              control={
                <Checkbox value={true} color="primary" name="tc" id="tc" />
              }
              label="I agree to term and condition."
            />
            <Box textAlign="center">
              <Button
                type="submit"
                variant="contained"
                // sx={{ mt: 3, mb: 2, px: 5 }}
                onClick={() => setOnce(true)}
              >
                Sign In
              </Button>
            </Box>
            {error.status ? (
              <Alert severity={error.type}>{error.msg}</Alert>
            ) : (
              ""
            )}
          </Box>

          <Link to="/login"> Already have a account.? Log in</Link>
        </div>
      </div>
    </>
  );
};

export default Registration;
