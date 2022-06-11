import React, { useContext } from "react";
import "./App.scss";
import Routers from "./Routers";
import ContactForm from "./components/ContactForm/ContactForm";

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
        <ContactForm />
      <Routers />
      {/* <div style={{ display: "grid", placeContent: "center" }}>
        <ServicesDropdown />
      </div> */}
    </div>
  );
}

export default App;
