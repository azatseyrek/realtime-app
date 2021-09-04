import "./App.css";

import React from "react";
import Palatte from "./components/Palatte";
import {init, subscribe} from "./socketApi";
import {useEffect, useState} from 'react';


function App() {

  const [activeColor, setActiveColor] = useState('#282c34')

	useEffect(() => {
		init();

    subscribe((color) => {
      setActiveColor(color)
    });
		
	}, [])
  return (
    <div className="App" style={{backgroundColor:activeColor}}>
      <Palatte activeColor = {activeColor} />
    </div>
  );
}

export default App;
