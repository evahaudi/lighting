import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Link from '@mui/material/Link'; // Import the Link component

const LightBulb = () => {
  const [isLightOn, setIsLightOn] = useState(false);

  const handleToggleLight = () => {
    setIsLightOn((prevIsLightOn) => !prevIsLightOn);
  };

  // Custom styled button using Material-UI
  const StyledButton = styled(Button)(({ isOnProp }) => ({
    backgroundColor: isOnProp ? '#4caf50' : '#1976d2',
    color: '#fff',
    '&:hover': {
      backgroundColor: isOnProp ? '#1b5e20' : '#0059b3',
    },
  }));

  // Container styles for arranging the elements in parallel
  const Container = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  });

  return (
    <Container>
      <img
        id="bulb"
        src={isLightOn ? "images/lights-on.png" : "images/lights-off.png"}
        alt={isLightOn ? "Lights On" : "Lights Off"}
      />
      {/* Styled button for toggling the light */}
      <StyledButton variant="contained" isOnProp={isLightOn} onClick={handleToggleLight}>
        {isLightOn ? "Turn Off" : "Turn On"}
      </StyledButton>
      <p>© <Link href="https://www.linkedin.com/in/everlyne-akinyi-90683a1b5/" target="_blank" rel="noopener noreferrer">Everlyne akinyi</Link>. All rights reserved.</p>
      
      <p><Link href="https://github.com/evahaudi/lighting" target="_blank" rel="noopener noreferrer">Project Github Link</Link></p>
      
    </Container>
  );
};

export default LightBulb;
