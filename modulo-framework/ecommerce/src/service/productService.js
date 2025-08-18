
import api from "./api";

export const getProducts = async () => {
    try {
        const response = await api.get('/products');
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
        throw error;
    }
};

export const getUserData = async () => {
    try {
        const response = await api.get('/login');
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
        throw error;
    }
};