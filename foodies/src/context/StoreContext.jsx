import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const StoreContext = createContext(null);

export const StoreContextProvider = ({ children }) => {
  const [foodList, setFoodList] = useState([]);

  const fetchFoodList = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/foods");
      setFoodList(response.data);
    } catch (error) {
      console.error("Erro ao buscar os alimentos:", error);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      await fetchFoodList();
    };
    loadData();
  }, []);

  const contextValue = { foodList, fetchFoodList };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};
