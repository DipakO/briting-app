import React from "react";
import Button from "@mui/material/Button";
import "./timing.css";

const Timing = () => {
  let curDate = new Date();
  curDate = curDate.getHours();
  const currDate = new Date().toLocaleDateString();
  const currTime = new Date().toLocaleTimeString();

  let msg = "";
  let name = "Dipak";

  if (curDate < 12) {
    msg = `Good Morning, ${name}`;
  } else if (curDate >= 12 && curDate <= 17) {
    msg = `Good Afternoon, ${name}`;
  } else if (curDate >= 17 && curDate <= 20) {
    msg = `Good Evening, ${name}`;
  } else if (curDate >= 20 && curDate <= 24) {
    msg = `Good Night, ${name}`;
  }

  return (
    <>
      <div style={{ display: "grid", placeItems: "center" }} className="timing">
        <h1 id="msg" className="msg">
          {msg}
        </h1>
        <Button id="btns" className="btn_1 mx-auto" variant="outlined">
          {currDate}
        </Button>
        <Button id="btns2" className="btn_1" variant="outlined">
          {currTime}
        </Button>
        <img id="image" className="image" src="./images/gif6.gif" alt="" />
      </div>
    </>
  );
};

export default Timing;
