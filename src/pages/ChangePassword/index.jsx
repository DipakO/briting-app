import { Box, TextField, Button, Alert } from "@mui/material";
import { useState } from "react";
import { useChangeUserPasswordMutation } from "../../service/Api";
import { getToken } from "../../service/LocalStorageService";
import { useNavigate } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";
const ChangePassword = () => {
  const navigate = useNavigate();
  const [cond, setCond] = useState(true);
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: "",
  });

  const handleBackArrow = () => {
    navigate("/Home");
  };
  const [changeUserPassword] = useChangeUserPasswordMutation();
  const token = getToken("token");
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const actualData = {
      password: data.get("password"),
      password_confirmation: data.get("password_confirmation"),
    };
    if (actualData.password && actualData.password_confirmation) {
      if (actualData.password === actualData.password_confirmation) {
        const res = await changeUserPassword({ actualData, token });
        if (res.data.status === "success") {
          document.getElementById("password-change-form").reset();
          setError({
            status: true,
            msg: "Password Changed Successful",
            type: "success",
          });
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

  const handleUpdate = () => {
    if (error.type == "success") {
      setCond(false);
    }
  };

  const handleLogin = () => {
    navigate("/login");
  };
  // Getting User Data from Redux Store

  return (
    <div className="mainInChangeP">
      <div className="LoginFormContainer">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            maxWidth: 600,
            mx: 4,
          }}
        >
          <h1>Change Password</h1>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
            id="password-change-form"
          >
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="New Password"
              type="password"
              id="password"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password_confirmation"
              label="Confirm New Password"
              type="password"
              id="password_confirmation"
            />
            <Box textAlign="center">
              {cond ? (
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ mt: 3, mb: 2, px: 5 }}
                  onClick={handleUpdate}
                >
                  {" "}
                  Update{" "}
                </Button>
              ) : (
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ mt: 3, mb: 2, px: 5 }}
                  onClick={handleLogin}
                  color="success"
                >
                  {" "}
                  Back To Login{" "}
                </Button>
              )}
            </Box>
            {error.status ? (
              <Alert severity={error.type}>{error.msg}</Alert>
            ) : (
              ""
            )}
            {cond ? (
              <RiArrowGoBackFill
                onClick={handleBackArrow}
                size={40}
                className="backArrowInChangeP"
              />
            ) : (
              <RiArrowGoBackFill
                onClick={handleLogin}
                size={40}
                className="backArrowInChangeP"
              />
            )}
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default ChangePassword;
