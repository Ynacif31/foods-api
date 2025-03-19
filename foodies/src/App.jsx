import React from 'react';
import Menubar from './components/menubar/Menubar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Explore from './pages/Explore/Explore';
import ContactUs from './pages/Contact Us/ContactUs'; // Importação corrigida

const App = () => {
  return (
    <div>
      <Menubar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/contact' element={<ContactUs />} />
      </Routes>
    </div>
  );
};

export default App;