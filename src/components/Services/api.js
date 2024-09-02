import axios from "axios";

export const fetchProducts = () => {
  return axios.get("/api/products");
};

export const saveFavoriteProduct = (product) => {
  return axios.post("/api/favorites", product);
};
