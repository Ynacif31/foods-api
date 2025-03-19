import axios from "axios";

const API_URL = 'http://localhost:8080/api/foods';

export const addFood = async (foodData, image) => {
  const formData = new FormData();
  formData.append('food', JSON.stringify(foodData));
  formData.append('file', image);

  try {
    await axios.post(API_URL, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  } catch (error) {
    console.log('error', error);
    throw error;
  }
};

export const getFoodList = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
};

export const removeFood = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
    return true;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
};