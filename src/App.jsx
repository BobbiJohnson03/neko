import * as React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header.jsx'; 
import RowOne from './components/RowOne.jsx'; 
import RowTwo from './components/RowTwo.jsx';
import RowThree from './components/RowThree.jsx';
import RowFour from './components/RowFour.jsx';
import Footer from './components/Footer.jsx';  
import LogoA100 from './assets/Logo_A100.svg'; 
import './App.css';
import '@fontsource/roboto-condensed/300.css';
import '@fontsource/roboto-condensed/400.css';
import '@fontsource/roboto-condensed/500.css';
import '@fontsource/roboto-condensed/700.css';
import Button from '@mui/material/Button';

// Komponent EmptyPage
const EmptyPage = ({ title }) => {
  const navigate = useNavigate();
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>{title}</h1>
      <Button
        variant="outlined"
        size="large"
        onClick={() => navigate('/')} // Przekierowuje do strony głównej
        sx={{
          mt: 2,
          color: '#D81B60', // Kolor tekstu - różowy odcień
          borderColor: '#D81B60', // Kolor krawędzi - różowy odcień
          '&:hover': {
            borderColor: '#C2185B', // Jaśniejszy różowy odcień przy najechaniu
            backgroundColor: '#F8BBD0', // Jasnoróżowy kolor tła przy najechaniu
          },
        }}
      >
        Powrót
      </Button>
    </div>
  );
};

const Home = () => (
  <>
    <Header />
    <div className="row-one-container" style={{ marginTop: '70px', marginBottom: '100px' }}>
      <RowOne />
    </div>
    <div style={{ marginBottom: '100px' }}></div>
    <div className="row-two-container" style={{ marginBottom: '100px' }}>
      <RowTwo />
    </div>
    <div style={{ marginBottom: '100px' }}></div>
    <div className="row-three-container" style={{ marginBottom: '100px' }}>
      <RowThree />
    </div>
    <div style={{ marginBottom: '100px' }}></div>
    <div className="row-four-container" style={{ marginBottom: '100px' }}>
      <RowFour />
    </div>
    <Footer />
  </>
);

const App = () => {
  return (
    <Router>
      <CssBaseline />
      <div className="my-container">
        <div className="header-container" style={{ marginBottom: '30px' }}>
          <Header />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/oferty-pracy" element={<EmptyPage title="Oferty Pracy" />} />
          <Route path="/o-nas" element={<EmptyPage title="O Nas" />} />
          <Route path="/aplikuj" element={<EmptyPage title="Aplikuj" />} />
          <Route path="/telefon-wsparcia" element={<EmptyPage title="Telefon Wsparcia" />} />
          <Route path="/co-nowego" element={<EmptyPage title="Co Nowego?" />} />
          <Route path="/partnerzy" element={<EmptyPage title="Partnerzy" />} />
          <Route path="/poradnik" element={<EmptyPage title="Poradnik" />} />
        </Routes>
        {/* Nowa sekcja z logo */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '20px 0' }}>
          <img src={LogoA100} alt="Logo A100" style={{ height: '40px' }} />
        </div>
      </div>
    </Router>
  );
};

export default App;