import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import './ListFood.css';
import { getFoodList, removeFood } from '../../services/foodService';

const ListFood = () => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const data = await getFoodList();
      setList(data);
    } catch (error) {
      toast.error('Erro ao carregar lista de alimentos');
    }
  };

  const handleRemoveFood = async (id) => {
    try {
      const success = await removeFood(id);
      if (success) {
        toast.success('Alimento removido com sucesso');
        await fetchList();
      }
    } catch (error) {
      toast.error('Erro ao remover alimento');
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className='py-5 row justify-content-center'>
      <div className='col-11 card'>
        <table className='table'>
          <thead>
            <tr>
              <th>Imagem</th>
              <th>Nome</th>
              <th>Descrição</th>
              <th>Categoria</th>
              <th>Preço</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item, index) => (
              <tr key={index}>
                <td>
                  <img src={item.imageUrl} alt='' height={48} width={48} />
                </td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.category}</td>
                <td>R${item.price}</td>
                <td className='text-danger'>
                  <i className='bi bi-x-circle-fill' onClick={() => handleRemoveFood(item.id)}></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListFood;