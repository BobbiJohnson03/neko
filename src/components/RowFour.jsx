import { Card, CardMedia, Grid } from "@mui/material";
import photo5 from '../assets/photo5.png';
import React from 'react';

/*                    KOMPONENT IMAGECARD

  CARD jest kontenerem dla obrazu. Zawiera tylko CardMedia.
*/ 

const ImageCard = ({ image }) => (
  <Card
    style={{
      position: 'relative',  // Umożliwia pozycjonowanie dzieci względem tej CARD
      display: 'inline-block',
      overflow: 'hidden'
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
  </Card>
);

/*                    KOMPONENT ROWFOUR

  W RowFour zawiera się Grid, w którym znajduje się:

    -> Grid Item w którym zawiera się -> ImageCard -> 1x image
  
*/ 

const RowFour = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <ImageCard image={photo5} />
      </Grid>
    </Grid>
  );
};

export default RowFour;
