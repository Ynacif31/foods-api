import React, { useState } from 'react';
import axios from 'axios';
import { assets } from '../../assets/assets'; // Importação do arquivo correto

const AddFood = () => {
    const [image, setImage] = useState(false);
    const [data, setData] = useState({
        name: '',
        description: '',
        category: '',
        price: ''
    });

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({
            ...data,
            [name]: value
        }));
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        if(!image) {
            alert('Imagem é obrigatória');
            return;
        }
        if(data.name === '') {
            alert('Nome é obrigatório');
            return;
        }
        if(data.description === '') {
            alert('Descrição é obrigatória');
            return;
        }
        if(data.category === '') {
            alert('Categoria é obrigatória');
            return;
        }
        if(data.price === '') {
            alert('Preço é obrigatório');
            return;
        }
        console.log(data);

        const formData = new FormData();
        formData.append('food', JSON.stringify(data));
        formData.append('file', image);

        try {
            const response = await axios.post('http://localhost:8080/api/foods', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            if(response.status === 201) {
                alert('Alimento cadastrado com sucesso');
                setData({
                    name: '',
                    description: '',
                    category: '',
                    price: ''
                });
                setImage(null);
            }
        } catch (error) {
            console.log('error', error);
            alert('Erro ao cadastrar alimento');
        }
    }

  return (
    <div className="mx-2 mt-2">
      <div className="row">
        <div className="col-md-4">
          <div className="card-body">
            <h2 className="mb-4">Adicione os alimentos</h2>
            <form onSubmit={onSubmitHandler}>
              <div className="mb-3">
                <label htmlFor="image" className="form-label">
                  <img 
                    src={image ? URL.createObjectURL(image): assets.output} 
                    alt="Upload" 
                    width={98} 
                    style={{ cursor: 'pointer' }} // Estilo para aparecer o cursor como mãozinha
                  />
                </label>
                <input type="file" className="form-control" id="image" required hidden onChange={(e) => setImage(e.target.files[0])} />
              </div>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Nome</label>
                <input type="text" className="form-control" id="name" required name='name' onChange={onChangeHandler} value={data.name} />
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">Descrição</label>
                <textarea className="form-control" id="description" rows="5" required name='description' onChange={onChangeHandler} value={data.description}></textarea>
              </div>            
              <div className="mb-3">
                <label htmlFor="category" className="form-label">Categoria</label>
                <select name='category' id="category" className="form-select" required onChange={onChangeHandler} value={data.category}>
                  <option value="Tradicionais">Tradicionais</option>
                  <option value="Especiais">Especiais</option>
                  <option value="Integrais">Integrais</option>
                  <option value="Sem Gluten">Sem Gluten</option>
                  <option value="Sem Lactose">Sem Lactose</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="price" className="form-label">Preço</label>
                <input type="number" name='price' id="price" className="form-control" required onChange={onChangeHandler} value={data.price} />
              </div>
              <button type="submit" className="btn btn-primary">Salvar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddFood;
