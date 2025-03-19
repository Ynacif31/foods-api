import React, { useState, useRef } from 'react';
import { toast } from 'react-toastify';
import { addFood } from '../../services/foodService';
import { assets } from '../../assets/assets';
import { NumericFormat } from 'react-number-format'; // Importação corrigida

const AddFood = () => {
    const [image, setImage] = useState(null);
    const [data, setData] = useState({
        name: '',
        description: '',
        category: '',
        price: ''
    });
    const fileInputRef = useRef(null);

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({
            ...data,
            [name]: value
        }));
    };

    const onSubmitHandler = async (event) => {
        event.preventDefault();

        // Validação dos campos antes de enviar os dados
        if (!image) {
            toast.error('Imagem é obrigatória');
            return;
        }
        if (data.name === '') {
            toast.error('Nome é obrigatório');
            return;
        }
        if (data.description === '') {
            toast.error('Descrição é obrigatória');
            return;
        }
        if (data.category === '') {
            toast.error('Categoria é obrigatória');
            return;
        }
        if (data.price === '' || isNaN(data.price)) {
            toast.error('Preço é obrigatório e deve ser um número válido');
            return;
        }

        console.log(data);  // Aqui você pode manter para depuração, antes de enviar os dados para o servidor

        try {
            // Aqui você faz a chamada para o serviço que adiciona o alimento no backend
            await addFood(data, image);
            toast.success('Alimento adicionado com sucesso');
            setData({
                name: '',
                description: '',
                category: '',
                price: ''
            });
            setImage(null);  // Limpa a imagem após sucesso
            if (fileInputRef.current) {
                fileInputRef.current.value = '';  // Limpa o campo de arquivo
            }
        } catch (error) {
            toast.error('Erro ao adicionar alimento');
        }
    };

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
                                        src={image ? URL.createObjectURL(image) : assets.output} 
                                        alt="Upload" 
                                        width={98} 
                                        style={{ cursor: 'pointer' }} // Estilo para aparecer o cursor como mãozinha
                                    />
                                </label>
                                <input 
                                    type="file" 
                                    className="form-control" 
                                    id="image" 
                                    required 
                                    hidden 
                                    onChange={(e) => setImage(e.target.files[0])} 
                                    ref={fileInputRef}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Nome</label>
                                <input 
                                    type="text"
                                    placeholder='Nome do alimento'
                                    className="form-control" 
                                    id="name" 
                                    required 
                                    name="name" 
                                    onChange={onChangeHandler} 
                                    value={data.name} 
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Descrição</label>
                                <textarea 
                                    className="form-control" 
                                    placeholder='Descrição do alimento'
                                    id="description" 
                                    rows="5" 
                                    required 
                                    name="description" 
                                    onChange={onChangeHandler} 
                                    value={data.description}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="category" className="form-label">Categoria</label>
                                <select 
                                    name="category" 
                                    id="category" 
                                    className="form-select"
                                    placeholder='Selecione a categoria' 
                                    required 
                                    onChange={onChangeHandler} 
                                    value={data.category}
                                >
                                    <option value="Tradicionais">Tradicionais</option>
                                    <option value="Especiais">Especiais</option>
                                    <option value="Integrais">Integrais</option>
                                    <option value="Sem Gluten">Sem Gluten</option>
                                    <option value="Sem Lactose">Sem Lactose</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="price" className="form-label">Preço</label>
                                <NumericFormat // Usando NumericFormat em vez de NumberFormat
                                    name="price"
                                    id="price"
                                    className="form-control"
                                    placeholder='R$ 0,00'
                                    value={data.price}
                                    thousandSeparator={','}
                                    decimalSeparator={'.'}
                                    onValueChange={(values) => setData({
                                        ...data,
                                        price: values.value
                                    })}
                                    required 
                                    prefix="R$ "
                                    decimalScale={2}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">Salvar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddFood;