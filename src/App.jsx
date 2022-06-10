
import React from 'react'
import './App.scss';
import Routers from "./Routers";

import Navbar from './components/Navbar/Navbar'


function App() {
  return (
    <div className="App mainApp">
      <Navbar />
        <Routers />
    </div>
  );
}

export default App;
