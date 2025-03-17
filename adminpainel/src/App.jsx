import React, { useState } from 'react'; // Corrigir a importação do useState
import { Route, Routes } from 'react-router-dom';
import ListFood from './pages/ListFood/ListFood';
import Sidebar from './components/Sidebar/Sidebar';
import AddFood from './pages/AddFood/AddFood';
import Menubar from './components/Menubar/Menubar';
import Orders from './pages/Orders/Orders';

const App = () => {
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div className="d-flex" id="wrapper">
      <Sidebar sidebarVisible={sidebarVisible} />
      <div id="page-content-wrapper">
        <Menubar toggleSidebar={toggleSidebar} />
        <div className="container-fluid">
          <Routes>
            <Route path='/add-food' element={<AddFood />} />
            <Route path='/list-food' element={<ListFood />} />
            <Route path='/orders' element={<Orders />} />
            <Route path='/' element={<ListFood />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;

