import React, { useContext, useState, useEffect } from "react";
import "./App.scss";
import Routers from "./Routers";

import Navbar from "./components/Navbar/Navbar";
import ServicesDropdown from "./components/Navbar/NavbarComps/ServicesDropdown";

import { MarluContext } from "./components/Context";

import ContactForm from "./components/ContactForm/ContactFormComponents/Modal";

import GeneralForm from "./components/Form/GeneralForm";

import Footer from './components/Footer'

function App() {
  const { defaultBackgroundColor, colorPalette } = useContext(MarluContext);

  // Contact US
  const [basicModal, setBasicModal] = useState(false);
  const toggleShow = () => setBasicModal(!basicModal);
  const [sent, setSent] = useState(false);

  // Apply For Job + Free Consult
  const toggleGeneralFormShow = () => setCentredModal(!centredModal);
  const [centredModal, setCentredModal] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (basicModal === false) setSent(false);
    }, 1000);
  }, [basicModal]);

  console.log("Modal", basicModal);
  return (
    <div
      className="App mainApp"
      style={{ backgroundColor: defaultBackgroundColor }}
    >
      <ContactForm
        basicModal={basicModal}
        setBasicModal={setBasicModal}
        toggleShow={toggleShow}
        sent={sent}
        setSent={setSent}
      />
      <GeneralForm
        toggleGeneralFormShow={toggleGeneralFormShow}
        centredModal={centredModal}
        setCentredModal={setCentredModal}
      />
      <div className="main-container">
        <Navbar
          textColor={colorPalette.textColor}
          toggleShow={toggleShow}
          toggleGeneralFormShow={toggleGeneralFormShow}
        />

        <Routers />
      </div>
      <Footer />
    </div>
  );
}

export default App;
