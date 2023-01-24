import React from "react";
import { useNavigate } from "react-router-dom";
const NavBar2 = () => {
  const Navigate = useNavigate();
  const handleHomeClick = () => {
    Navigate("/");
  };

  const handleRealaxationClick = () => {
    Navigate("/Realaxation");
  };

  const handleMusicClick = () => {
    Navigate("/music");
  };

  const handleSleepClick = () => {
    Navigate("/sleep");
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          border: "1px solid gray",
          alignItems: "center",
          paddingTop: "10px",
        }}
      >
        <p onClick={handleHomeClick} style={{ cursor: "pointer" }}>
          Home
        </p>
        <p onClick={handleRealaxationClick} style={{ cursor: "pointer" }}>
          Relaxation
        </p>
        <p onClick={handleMusicClick} style={{ cursor: "pointer" }}>
          Music
        </p>
        <p onClick={handleSleepClick} style={{ cursor: "pointer" }}>
          Sleep{" "}
        </p>
      </div>
    </div>
  );
};

export default NavBar2;
