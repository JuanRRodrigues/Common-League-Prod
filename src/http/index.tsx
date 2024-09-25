import axios, { AxiosRequestConfig, AxiosResponse, AxiosError, InternalAxiosRequestConfig } from 'axios';

// Criação de instância do axios
const http = axios.create({
    baseURL: 'http://localhost:5173/',
    headers: {
        Accept: 'application/json',
    },
});

// Interceptor de requisição
http.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        const token = sessionStorage.getItem('token');
        if (token && config.headers) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error: AxiosError) => {
        return Promise.reject(error);
    }
);

// Interceptor de resposta
http.interceptors.response.use(
    (response: AxiosResponse) => {
        return response;
    },
    (error: AxiosError) => {
        if (error.response && error.response.status === 403) {
            // Remove o token do cache
            // sessionStorage.removeItem('token');
        }
        return Promise.reject(error);
    }
);

export default http;
