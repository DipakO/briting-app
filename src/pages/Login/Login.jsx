import { TextField, Button, Box, Alert, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import "./Login.css";
import relax from "../../images/relax2.png";
import { Link, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../../service/Api";
import { useDispatch } from "react-redux";
import { getToken, storeToken } from "../../service/LocalStorageService";
import { setUserToken } from "../../features/authSlice";

const UserLogin = () => {
  const Navigate = useNavigate();
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: "",
  });
  const [loginUser, { isLoading }] = useLoginUserMutation();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      email: data.get("email"),
      password: data.get("password"),
    };
    // Navigate("/Home");
    if (actualData.email && actualData.password) {
      const res = await loginUser(actualData);

      if (res.data.token) {
        storeToken(res.data.token);

        Navigate("/Home");
      }
      if (res.data.status === "failed") {
        setError({ status: true, msg: res.data.message, type: "error" });
      }
    } else {
      setError({ status: true, msg: "All Fields are Required", type: "error" });
    }
  };

  let token = getToken("token");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setUserToken({ token: token }));
  }, [token, dispatch]);

  return (
    <>
      <div className="mainInLogin">
        <div className="LoginFormContainer">
          <Box
            component="form"
            noValidate
            sx={{ mt: 1 }}
            id="login-form"
            onSubmit={handleSubmit}
            className="boxInLogin"
          >
            <img className="imgInLogin" src={relax} alt="relax" />
            <div className="input">
              <input
                margin="normal"
                required
                fullWidth
                id="email"
                name="email"
                label="Email Address"
              />

              <input
                margin="normal"
                required
                fullWidth
                id="password"
                name="password"
                label="Password"
                type="password"
              />
            </div>
            <Box textAlign="center">
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2, px: 5 }}
              >
                Login
              </Button>
            </Box>
            <div className="Links">
              <small>Forgot Password ?</small>
              <div>
                <small>Not yet Account ?</small>
                <Link to="/">Sing Up </Link>
              </div>
            </div>
            {error.status ? (
              <Alert severity={error.type} sx={{ mt: 3 }}>
                {error.msg}
              </Alert>
            ) : (
              ""
            )}
          </Box>
        </div>
      </div>
    </>
  );
};

export default UserLogin;
