import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const StoreContext = createContext(null);

export const StoreContextProvider = ({ children }) => {
    const [foodList, setFoodList] = useState([]);

    const fetchFoodList = async () => {
        try {
            const response = await axios.get("http://localhost:8080/api/foods");
            console.log(response.data); // Adicione o log para verificar o retorno da API
            setFoodList(response.data);
        } catch (error) {
            console.error("Erro ao buscar lista de alimentos:", error);
        }
    };

    useEffect(() => {
        fetchFoodList();
    }, []);

    const contextValue = {
        foodList,
        fetchFoodList,
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    );
};
