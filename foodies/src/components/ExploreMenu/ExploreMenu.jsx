import React from 'react';
import { categories } from '../../assets/assets';
import './ExploreMenu.css'; 

const ExploreMenu = () => {

    const menuRef = React.useRef(null);
    const scrollLeft = () => {
        if(menuRef.current){
            menuRef.current.scrollBy ({
                left: -200,
                behavior: 'smooth'
            });
        }
    };

    const scrollRight = () => {
        if(menuRef.current){
            menuRef.current.scrollBy ({
                left: 200,
                behavior: 'smooth'
            });
        }
    }


  return (
    <div className='explore-menu container py-5'>
      <div className='d-flex justify-content-between align-items-center mb-4'>
        <h2 className='display-5 fw-bold text-dark'>Explore Nosso Cardápio</h2>
        <div className='scroll-buttons'>
          <button className='btn btn-outline-secondary me-2'>
            <i className='bi bi-chevron-left fs-4' onClick={scrollLeft}></i>
          </button>
          <button className='btn btn-outline-secondary'>
            <i className='bi bi-chevron-right fs-4' onClick={scrollRight}></i>
          </button>
        </div>
      </div>
      
      <p className='lead text-muted mb-5'>Delicie-se com nossa seleção de pães artesanais de fermentação natural</p>
      
      <div className='explore-menu-list d-flex gap-4 overflow-auto pb-3' ref={menuRef}>
        {categories.map((item, index) => (
          <div key={index} className='explore-menu-list-item text-center'>
            <div className='menu-item-img-container p-2'>
              <img 
                src={item.icon} 
                alt={item.category} 
                className='rounded-circle shadow-sm img-fluid'
                style={{ width: '140px', height: '140px', objectFit: 'cover' }}
              />
            </div>
            <p className='mt-3 mb-0 fw-semibold text-dark'>{item.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreMenu;