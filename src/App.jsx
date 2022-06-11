import React from "react";
import "./App.scss";
import Routers from "./Routers";

import Navbar from "./components/Navbar/Navbar";
import  ServicesDropdown from './components/Navbar/NavbarComps/ServicesDropdown'

function App() {
  return (
    <div className="App mainApp">
      <Navbar />
      <Routers />
      {/* <ServicesDropdown /> */}
    </div>
  );
}

export default App;
