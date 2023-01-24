import React, { useState } from "react";
import ActionAreaCard from "./Card";
import Timing from "../Timing/Timing";
import PrimarySearchAppBar from "./Navbar";
import { useGetBrithingDataQuery } from "../service";
import NavBar2 from "./NavBar2";

const Homepage = () => {
  const { data, isLoading } = useGetBrithingDataQuery();
  const [searchText, setSearchText] = useState("");
  const liftTheState = (text) => {
    setSearchText(text);
  };

  return (
    <>
      <div>
        <PrimarySearchAppBar liftTheState={liftTheState} />
        <Timing />
        <br />
        <NavBar2 />
        <div
          style={{
            marginBottom: "10px",
            display: "flex",
            flexWrap: "wrap",
            margin: "60px",
            marginTop: "10px",
            justifyContent: "space-around",
          }}
          className="container-fluid d-flex mx-auto mt-3"
        >
          {isLoading ? (
            <h1>Loading...</h1>
          ) : (
            data
              .filter((row) => {
                if (searchText === "") {
                  return row;
                } else if (
                  row.title.toLowerCase().includes(searchText.toLowerCase())
                ) {
                  return row;
                }
              })
              .map((elem, i) => {
                return (
                  <div key={i}>
                    <ActionAreaCard key={i} elem={elem} />
                  </div>
                );
              })
          )}
        </div>
      </div>
    </>
  );
};

export default Homepage;
