import React, { useState } from 'react';
import './App.css';
import LightBulb from './lights';

function App() {
  const [isLightOn, setIsLightOn] = useState(false);

  const handleToggleLight = () => {
    setIsLightOn((prevIsLightOn) => !prevIsLightOn);
  };

  return (
    <div className={`App ${isLightOn ? 'light-on' : 'light-off'}`}>
      <header className="App-header">
        <LightBulb isLightOn={isLightOn} onToggleLight={handleToggleLight} />
      </header>
    </div>
  );
}

export default App;
