import React, { useState, useEffect } from "react";
import { useGetLoggedUserQuery } from "../service/Api";
import { getToken } from "../service/LocalStorageService";
import { setUserInfo } from "../features/userSlice";
import { useDispatch } from "react-redux";
import "./profile.css";
import { CgProfile } from "react-icons/cg";
import { TiArrowBack } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const token = getToken();
  const { data, isSuccess } = useGetLoggedUserQuery(token);
  const [userData, setUserData] = useState({
    email: "",
    name: "",
  });
  useEffect(() => {
    if (data && isSuccess) {
      setUserData({
        email: data.user.email,
        name: data.user.name,
      });
    }
  }, [data, isSuccess]);

  const dispatch = useDispatch();
  useEffect(() => {
    if (data && isSuccess) {
      dispatch(
        setUserInfo({
          email: data.user.email,
          name: data.user.name,
        })
      );
    }
  }, [data, isSuccess, dispatch]);
  const handleBackClick = () => {
    navigate("/Home");
  };
  return (
    <div className="mainInProfile">
      <div className="profileContainer">
        <div>
          <CgProfile size={100} className="profileIcon" />
        </div>
        <h3>User Name : {userData.name}</h3>
        <h3>User Email : {userData.email}</h3>
        <TiArrowBack
          onClick={handleBackClick}
          size={100}
          className="backarrow"
        />
      </div>
    </div>
  );
};

export default Profile;
