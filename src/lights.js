import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const LightBulb = () => {
  const [isLightOn, setIsLightOn] = useState(false);

  const handleBtnOn = () => {
    setIsLightOn(true);
  };

  const handleBtnOff = () => {
    setIsLightOn(false);
  };

  // Custom styled button using Material-UI
  const StyledButton = styled(Button)(({ isOn }) => ({
    margin: '10px',
    backgroundColor: isOn ? '#4caf50' : '#1976d2',
    color: '#fff',
    '&:hover': {
      backgroundColor: isOn ? '#1b5e20' : '#0059b3',
    },
  }));

  return (
    <div>
      <img
        id="bulb"
        src={isLightOn ? "images/lights-on.png" : "images/lights-off.png"}
        alt={isLightOn ? "Lights On" : "Lights Off"}
      />
      <p id="message-el">
        {isLightOn ? "Lights On" : "Lights Off"}
      </p>
      {/* Styled buttons */}
      <StyledButton variant="contained" isOn={isLightOn} onClick={handleBtnOn}>
        Turn On
      </StyledButton>
      <StyledButton variant="contained" isOn={!isLightOn} onClick={handleBtnOff}>
        Turn Off
      </StyledButton>
    </div>
  );
};

export default LightBulb;
