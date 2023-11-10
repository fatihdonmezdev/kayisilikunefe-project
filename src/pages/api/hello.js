import axios from "axios";

const baseURL = "https://api.escuelajs.co/api/v1/products";

const axiosInstance = axios.create({
  baseURL,
});

export const fetchProducts = async () => {
  const response = await axiosInstance.get();

  return response.data;
};

export const fetchFiltered = async (title) => {
  const response = await axiosInstance.get(`?title=${title}`);

  return response.data;
};

export const fetchDetail = async (id) => {
  const response = await axiosInstance.get(`/${id}`);

  return response.data;
};
