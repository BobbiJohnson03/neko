import React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const CustomButtonGroup = () => {
  return (
    <ButtonGroup
      variant="text"
      color="secondary"
      size="small"
      disableElevation
      sx={{
        '& .MuiButton-root': {
          border: 'none', // Usuwa domyślne obramowanie
          position: 'relative', // Pozwala na dodatkowe stylizacje
          '&:hover': {
            borderBottom: '2px solid #000', // Dolna krawędź po najechaniu
          },
          '&:focus': {
            outline: 'none', // Usuwa obramowanie po kliknięciu
            border: 'none', // Usuwa dodatkowe obramowanie
          },
          margin: '0 4px', // Dodaje odstęp między przyciskami
        },
      }}
    >
      <Button component={Link} to="/oferty-pracy">Oferty pracy</Button>
      <Button component={Link} to="/o-nas">O nas</Button>
      <Button component={Link} to="/aplikuj">Aplikuj</Button>
      <Button component={Link} to="/telefon-wsparcia">Telefon wsparcia</Button>
      <Button component={Link} to="/co-nowego">Co nowego?</Button>
      <Button component={Link} to="/partnerzy">Partnerzy</Button>
      <Button component={Link} to="/poradnik">Poradnik</Button>
    </ButtonGroup>
  );
};

export default CustomButtonGroup;
