import axios from "axios";

const baseURL = "http://localhost:3001/products";

const axiosInstance = axios.create({
  baseURL,
});

export const fetchProducts = async () => {
  const response = await axiosInstance.get();

  return response.data;
};
