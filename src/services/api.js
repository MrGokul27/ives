import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:8080/api' });

export const fetchProducts = () => API.get('/products');
export const fetchProduct = (id) => API.get(`/products/${id}`);
export const userLogin = (formData) => API.post('/auth/login', formData);
export const userRegister = (formData) => API.post('/auth/register', formData);
export const createOrder = (orderData) => API.post('/orders', orderData);
