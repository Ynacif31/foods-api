import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ListFood from './pages/ListFood/ListFood';
import Sidebar from './components/Sidebar/Sidebar';
import AddFood from './pages/AddFood/AddFood';
import Menubar from './components/Menubar/Menubar';
import Orders from './pages/Orders/Orders'; 

const App = () => {
  return (
    <div className="d-flex" id="wrapper">
      <Sidebar />
      <div id="page-content-wrapper">
        <Menubar />
        <div className="container-fluid">
          <Routes>
            <Route path='/add' element={<AddFood />} />
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
