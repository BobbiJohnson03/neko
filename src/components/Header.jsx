import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Logo from '../assets/Logo.svg';
import CustomButtonGroup from './ButtonGroup.jsx'; 

const Header = () => {
  return (
    <AppBar position="fixed">
      <Container
        sx={{
          maxWidth: '1920px', 
          width: '100%', 
        }}
      >
        <Toolbar>
          <img src={Logo} alt="Logo" style={{ height: '40px', marginRight: '10px' }} />
          <Box sx={{ flexGrow: 1 }} />
          <CustomButtonGroup />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;