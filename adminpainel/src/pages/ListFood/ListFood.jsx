import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const ListFood = () => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/foods');
      if (response.status === 200) {
        const data = await response.json(); // Convertendo a resposta para JSON
        setList(data);
      } else {
        toast.error('Erro ao buscar alimentos');
      }
    } catch (error) {
      toast.error('Erro ao buscar alimentos');
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
                  <i className='bi bi-x-circle-fill'></i>
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