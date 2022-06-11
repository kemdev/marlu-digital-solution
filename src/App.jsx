import React from "react";
import "./App.scss";
import Routers from "./Routers";
import ContactForm from "./components/ContactForm/ContactForm";

import Navbar from "./components/Navbar/Navbar";
import  ServicesDropdown from './components/Navbar/NavbarComps/ServicesDropdown'

function App() {
  return (
    <div className="App mainApp">
      <Navbar />
        <Routers />
        <ContactForm />
      <Routers />
      {/* <ServicesDropdown /> */}
    </div>
  );
}

export default App;
