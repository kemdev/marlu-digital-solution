import React, { useContext } from "react";
import "./App.scss";
import Routers from "./Routers";

import Navbar from "./components/Navbar/Navbar";
import ServicesDropdown from "./components/Navbar/NavbarComps/ServicesDropdown";

import { MarluContext } from "./components/Context";

function App() {
  const { defaultBackgroundColor, setDefaultBackgroundColor } =
    useContext(MarluContext);

    console.log('Color is', defaultBackgroundColor);
  return (
    <div
      className="App mainApp"
      style={{ backgroundColor: defaultBackgroundColor }}
    >
      <Navbar />
        <Routers />
    </div>
  );
}

export default App;
