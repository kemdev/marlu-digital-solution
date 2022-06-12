import React, { useContext } from "react";
import "./App.scss";
import Routers from "./Routers";

import Navbar from "./components/Navbar/Navbar";
import ServicesDropdown from "./components/Navbar/NavbarComps/ServicesDropdown";

import { MarluContext } from "./components/Context";

function App() {
  const { defaultBackgroundColor, colorPalette } = useContext(MarluContext);





  return (
    <div
      className="App mainApp"
      style={{ backgroundColor: defaultBackgroundColor }}

    >
      <div className="main-container">

      <Navbar
        textColor={colorPalette.textColor}
      />
      
      <Routers />
      </div>
    </div>
  );
}

export default App;
