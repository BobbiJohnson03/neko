import React from 'react';
import { Card, CardMedia, Grid, Button } from "@mui/material";
import photo4 from '../assets/photo4.png'; // Importuj photo4

const ImageCard = ({ image, buttons }) => (
  <Card
    style={{
      position: 'relative',  // Umożliwia pozycjonowanie dzieci względem tej CARD
      display: 'inline-block',
      overflow: 'hidden'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.querySelectorAll('button').forEach(button => {
        button.style.opacity = 1;
      });
    }}
    onMouseLeave={(e) => {
      e.currentTarget.querySelectorAll('button').forEach(button => {
        button.style.opacity = 0;
      });
    }}
  >
    <CardMedia
      component="img"
      alt="Example Image"
      image={image}
      title="Example Image"
      sx={{
        width: '100%',
        height: 'auto',
        objectFit: 'contain', // zapewnia, że obraz jest wyświetlany w pełni w ramach dostępnego obszaru
      }}
    />
    {buttons}
  </Card>
);

const RowThree = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <ImageCard
          image={photo4}
          buttons={
            <>
              <Button
                sx={{
                  backgroundColor: 'transparent',
                  border: '1px solid rgba(255, 255, 255, 0.5)',
                  position: 'absolute',
                  left: 0,
                  width: '100%',
                  height: '25%',
                  top: 0,
                  opacity: 1, // Widoczny cały czas
                  transition: 'opacity 0.3s ease',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  },
                  outline: 'none', // Usuwa krawędzie
                }}
              >
                Button 1
              </Button>

              <Button
                sx={{
                  backgroundColor: 'transparent',
                  border: '1px solid rgba(255, 255, 255, 0.5)',
                  position: 'absolute',
                  left: 0,
                  width: '100%',
                  height: '25%',
                  top: '25%',
                  opacity: 1, // Widoczny cały czas
                  transition: 'opacity 0.3s ease',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  },
                  outline: 'none', // Usuwa krawędzie
                }}
              >
                Button 2
              </Button>

              <Button
                sx={{
                  backgroundColor: 'transparent',
                  border: '1px solid rgba(255, 255, 255, 0.5)',
                  position: 'absolute',
                  left: 0,
                  width: '100%',
                  height: '25%',
                  top: '50%',
                  opacity: 1, // Widoczny cały czas
                  transition: 'opacity 0.3s ease',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  },
                  outline: 'none', // Usuwa krawędzie
                }}
              >
                Button 3
              </Button>

              <Button
                sx={{
                  backgroundColor: 'transparent',
                  border: '1px solid rgba(255, 255, 255, 0.5)',
                  position: 'absolute',
                  left: 0,
                  width: '100%',
                  height: '25%',
                  top: '75%',
                  opacity: 1, // Widoczny cały czas
                  transition: 'opacity 0.3s ease',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  },
                  outline: 'none', // Usuwa krawędzie
                }}
              >
                Button 4
              </Button>
            </>
          }
        />
      </Grid>
    </Grid>
  );
};

export default RowThree;

