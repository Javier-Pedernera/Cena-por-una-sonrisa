import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const login = async (email: string, password: string) => {
    const response = await axios.post(`${API_URL}/auth/login`, { email, password });
    const { access_token, user } = response.data;
  
    localStorage.setItem('token', access_token); 
    localStorage.setItem('user', JSON.stringify(user));
  
    return user;
  };

export const getToken = () => localStorage.getItem('token');

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };