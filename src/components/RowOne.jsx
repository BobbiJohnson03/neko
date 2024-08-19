import { Card, CardMedia, Grid, TextField, Box, Button } from "@mui/material";
import photo1 from '../assets/photo1.png';
import photo2 from '../assets/photo2.png';
import photo3 from '../assets/photo3.png';
import React from 'react';
import PopoverButton from './PopoverButton';

/*                    KOMPONENT IMAGECARD

  CARD jest kontenerem dla obrazu i innych rzeczy (buttony, formFields)

  position: 'relative', CARDMEDIA pozwala na wyświetlenie obrazu

    w CARD zawierają się: CardMedia, buttony i pola formularza
*/ 

const ImageCard = ({ image, buttons, formFields, popoverButton }) => (
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
    {formFields}
    {popoverButton}
    {buttons}
  </Card>
);

/*                    KOMPONENT ROWONE

  W RowOne zawiera się Grid, w którym zawierają się:

    -> Grid Item w którym zawiera się -> ImageCard w którym zawierają się -> 1x image, 1x button

    -> drugi Grid Item -> ImageCard -> 1x image, buttons [4x Button]

    -> trzeci Grid Item -> ImageCard -> 1x image, formFields, popoverButton
  
*/ 

const RowOne = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <ImageCard
          image={photo1}
          buttons={
            <Button
              sx={{
                backgroundColor: 'transparent',
                border: '1px solid rgba(255, 255, 255, 0.5)',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                opacity: 1, // Zmieniamy na 1, aby był widoczny cały czas
                transition: 'opacity 0.3s ease',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                },
                outline: 'none', // Dodane aby usunąć krawędzie
              }}
            >
              123456789
            </Button>
          }
        />
      </Grid>

      <Grid item xs={4}>
        <ImageCard
          image={photo2}
          buttons={
            <>
              <Button
                sx={{
                  backgroundColor: 'transparent',
                  border: '1px solid rgba(255, 255, 255, 0.5)',
                  position: 'absolute',
                  left: 0,
                  width: '100%',
                  height: '35%',
                  top: 0,
                  opacity: 1, // Zmieniamy na 1, aby był widoczny cały czas
                  transition: 'opacity 0.3s ease',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  },
                  outline: 'none', // Dodane aby usunąć krawędzie
                }}
              >
              </Button>

              <Button
                sx={{
                  backgroundColor: 'transparent',
                  border: '1px solid rgba(255, 255, 255, 0.5)',
                  position: 'absolute',
                  left: 0,
                  width: '100%',
                  height: '25%',
                  top: '35%',
                  opacity: 1, // Zmieniamy na 1, aby był widoczny cały czas
                  transition: 'opacity 0.3s ease',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  },
                  outline: 'none', // Dodane aby usunąć krawędzie
                }}
              >
              </Button>

              <Button
                sx={{
                  backgroundColor: 'transparent',
                  border: '1px solid rgba(255, 255, 255, 0.5)',
                  position: 'absolute',
                  left: 0,
                  width: '100%',
                  height: '20%',
                  top: '60%',
                  opacity: 1, // Zmieniamy na 1, aby był widoczny cały czas
                  transition: 'opacity 0.3s ease',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  },
                  outline: 'none', // Dodane aby usunąć krawędzie
                }}
              >
              </Button>

              <Button
                sx={{
                  backgroundColor: 'transparent',
                  border: '1px solid rgba(255, 255, 255, 0.5)',
                  position: 'absolute',
                  left: 0,
                  width: '100%',
                  height: '20%',
                  top: '80%',
                  opacity: 1, // Zmieniamy na 1, aby był widoczny cały czas
                  transition: 'opacity 0.3s ease',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  },
                  outline: 'none', // Dodane aby usunąć krawędzie
                }}
              >
              </Button>
            </>
          }
        />
      </Grid>

      <Grid item xs={4}>
        <ImageCard
          image={photo3}
          formFields={
            <Box
              sx={{
                position: 'absolute',
                top: '42%', // Ustawienie formFields na 42% wysokości ImageCard
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '90%',
                textAlign: 'center',
              }}
            >
              <TextField
                fullWidth
                label="Imię i nazwisko*"
                variant="outlined"
                InputProps={{
                  style: { textAlign: 'center' },
                }}
                InputLabelProps={{
                  style: { textAlign: 'center', width: '100%' },
                }}
                sx={{ 
                  marginBottom: 1, 
                }}
              />
              <TextField
                fullWidth
                label="Telefon*"
                variant="outlined"
                InputProps={{
                  style: { textAlign: 'center' },
                }}
                InputLabelProps={{
                  style: { textAlign: 'center', width: '100%' },
                }}
              />
            </Box>
          }
          popoverButton={
            <Box
              sx={{
                position: 'absolute',
                top: '59%', 
                left: '62%',
                transform: 'translate(-7%, -50%)',
                zIndex: 10 
              }}
            >
              <PopoverButton />
            </Box>
          }
          buttons={ 
            <Button
              sx={{
                backgroundColor: 'transparent',
                border: '1px solid rgba(255, 255, 255, 0.5)',
                position: 'absolute',
                left: 0,
                width: '100%',
                height: '20%',
                top: '80%',
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
            </Button>
          }
        />
      </Grid>
    </Grid>
  );
};

export default RowOne;

