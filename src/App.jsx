
import React from 'react'
import './App.scss';
import Routers from "./Routers";
import ContactForm from "./components/ContactForm/ContactForm";

import Navbar from './components/Navbar/Navbar'


function App() {
  return (
    <div className="App mainApp">
      <Navbar />
        <Routers />
        <ContactForm />
    </div>
  );
}

export default App;
