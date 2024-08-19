import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import photo6 from '../assets/photo6.png';  // Upewnij się, że ścieżka do obrazu jest poprawna

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '50px',  // Można dostosować wysokość odstępu
      }}
    >
      {/* Obrazek w tle */}
      <img 
        src={photo6} 
        alt="Footer Image" 
        style={{ width: '100%', height: 'auto', maxWidth: '1920px' }} 
      />

      {/* Sekcja z przyciskami, umieszczona nad obrazem */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80%',  // Możesz dostosować szerokość
        }}
      >
        {/* Grid z przyciskami */}
        <Grid container spacing={1}>
          {[...Array(8)].map((_, index) => (
            <Grid item xs={3} key={index}> {/* Każdy przycisk zajmuje 1/4 szerokości */}
              <Button
                sx={{
                  backgroundColor: 'transparent',
                  border: '1px solid rgba(255, 255, 255, 0.5)',
                  width: '100%',
                  height: '100px', // Wysokość przycisku
                  opacity: 1,
                  transition: 'opacity 0.3s ease',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  },
                  outline: 'none',
                }}
              >
                Button {index + 1}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Footer;
