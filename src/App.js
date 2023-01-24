import React from "react";
import Homepage from "./Components/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Details from "./MusicCard/Details";
import "./App.css";
import Realaxation from "./Components/Realaxation";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/Realaxation" element={<Realaxation />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
