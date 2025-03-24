import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="hero-section" style={{
      background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1509440159596-0249088772ff")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
      marginBottom: '2rem',
      minHeight: 'clamp(300px, 60vh, 600px)',
      display: 'flex',
      alignItems: 'center',
      padding: '1rem'
    }}>
      <div className="container-fluid px-md-5">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6 text-center">
            <h1 className="display-4 display-md-3 display-lg-2 fw-bold mb-3 mb-md-4">
              Peça o seu pão favorito aqui
            </h1>
            <p className="lead d-none d-sm-block mb-4">
              Aqui você encontra os melhores pães da cidade, feitos com os melhores ingredientes e com muito amor.
            </p>
            <p className="mb-4 d-sm-none">
              Os melhores pães da cidade, feitos com amor.
            </p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Link 
              to="/explore" 
              className="btn btn-primary px-4 py-2"
              style={{
                borderRadius: '50px',
                fontWeight: '600',
                fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
                maxWidth: '250px' // Evita que o botão fique grande demais em telas largas
              }}
            >
              Explorar Cardápio
            </Link>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;