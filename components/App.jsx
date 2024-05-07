import Header from './Header.jsx';
import Filters from './Filters.jsx';
import { BrowserRouter as Router, useLocation } from 'react-router-dom'; 
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import GameDetails from './GameDetails.jsx';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
function AppContent() {
  const location = useLocation(); 

  return (
    <>
      <Header />
      {location.pathname === '/' && <h1>New and Trending</h1>} 
      <Routes>
        <Route path="/" element={<Filters />} />
        <Route path="/game/:id" element={<GameDetails />} />
      </Routes>
    </>
  );
}

export default App;
  

