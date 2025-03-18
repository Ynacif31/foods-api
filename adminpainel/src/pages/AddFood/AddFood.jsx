import React from 'react';

const AddFood = () => {
  return (
    <div className="container mt-2">
    <div className="row">
      <div className="col-md-4">
        <div className="card-body">
          <h2 className="mb-4">Adcione os alimentos</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Nome</label>
              <input type="text" className="form-control" id="name" required name='nome' />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">Descrição</label>
              <textarea className="form-control" id="description" rows="5" required name='description'></textarea>
            </div>            
            <div className="mb-3">
              <label htmlFor="category" className="form-label">Categoria</label>
              <select className="form-select" id="category">
              <option value="Tradicionais">Tradicionais</option>
                <option value="Especiais">Especiais</option>
                <option value="Integrais">Integrais</option>
                <option value="Sem Gluten">Sem Gluten</option>
                <option value="Sem Lactose">Sem Lactose</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="price" className="form-label">Preço</label>
              <input type="number"  name='price' className="form-control" id="price" required />
            </div>
            <button type="submit" className="btn btn-primary">Salvar</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default AddFood;