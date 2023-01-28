import React from "react";
import Button from "@mui/material/Button";
import "./timing.css";
import { useGetLoggedUserQuery } from "../service/Api";
import { getToken } from "../service/LocalStorageService";
import { useState } from "react";
import { useEffect } from "react";
const Timing = () => {
  let curDate = new Date();
  curDate = curDate.getHours();
  const currDate = new Date().toLocaleDateString();
  const currTime = new Date().toLocaleTimeString();

  const token = getToken();
  const { data, isSuccess } = useGetLoggedUserQuery(token);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    if (data && isSuccess) {
      setUserData({
        email: data.user.email,
        name: data.user.name,
      });
    }
  }, [data, isSuccess]);
  let msg = "";
  if (curDate < 12) {
    msg = `Good Morning, ${userData.name}`;
  } else if (curDate >= 12 && curDate <= 17) {
    msg = `Good Afternoon, ${userData.name}`;
  } else if (curDate >= 17 && curDate <= 20) {
    msg = `Good Evening, ${userData.name}`;
  } else if (curDate >= 20 && curDate <= 24) {
    msg = `Good Night, ${userData.name}`;
  }

  return (
    <>
      <div className="timing">
        <div className="timingAndMsgContainer">
          <div className="timingAndMsg">
            <h1 id="msg" className="msg">
              {msg}
            </h1>
            <Button id="btns" className="btn_1 mx-auto" variant="outlined">
              {currDate}
            </Button>
            <Button id="btns2" className="btn_1 mx-auto" variant="outlined">
              {currTime}
            </Button>
          </div>
        </div>
        {/* <img
          id="imageInTiming"
          className="image"
          src="./images/gif6.gif"
          alt=""
        /> */}
      </div>
    </>
  );
};

export default Timing;
