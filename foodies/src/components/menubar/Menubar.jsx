import React from 'react';
import './Menubar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom'; // Importe o componente Link

const Menubar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <img src={assets.naturalpani} alt="" className='mx-4' width={48} height={48} />
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/explore">Explore</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Entre em contato</Link>
            </li>
          </ul>
          <div className='d-flex align-items-center gap-4'>
            <div className='position-relative'>
              <img src={assets.cart} alt="" width={30} height={30} className='position-relative' />
              <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning'>5</span>
            </div>
            <button className="btn btn-outline-primary">Login</button>
            <button className="btn btn-outline-success">Cadastre-se</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Menubar;