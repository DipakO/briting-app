import React from "react";
import ActionAreaCard from "./Card";
import Timing from "../Timing/Timing";
import { useGetBrithingDataQuery } from "../service/Api";
import NavBar2 from "./NavBar2";
import PrimarySearchAppBar from "./Navbar";

const Homepage = ({ searchText }) => {
  const { data, isLoading } = useGetBrithingDataQuery();

  return (
    <>
      <div>
        <PrimarySearchAppBar />
        <NavBar2 />
        <Timing />
        <br />
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
              ?.filter((row) => {
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
