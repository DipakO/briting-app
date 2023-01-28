import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "../Components/Homepage";
import PrimarySearchAppBar from "../Components/Navbar";
import NavBar2 from "../Components/NavBar2";
import Realaxation from "../Components/Realaxation";
import Sleep from "../Components/Sleep";
import Details from "../Components/Details";
import Music from "../MusicCard/Music";
import UserLogin from "./Login/Login";
import Registration from "./SignUp/SignUp";
import Profile from "../Components/Profile";
import ChangePassword from "./ChangePassword";

const Routing = () => {
  const [searchText, setSearchText] = useState("");
  const liftTheState = (text) => {
    setSearchText(text);
  };
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/Home/details/:id" element={<Details />} />
          <Route path="/Home" element={<Homepage searchText={searchText} />} />
          <Route path="/Realaxation" element={<Realaxation />} />
          <Route path="/music" element={<Music />} />
          <Route path="/" element={<Registration />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/sleep" element={<Sleep />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/changepassword" element={<ChangePassword />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Routing;
