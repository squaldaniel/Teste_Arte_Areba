import axios from 'axios';

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/', // backend
    timeout: 5000,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

api.interceptors.response.use(
    (response) => response.data,
    (error) => {
        // console.error('Erro na requisição:', error.response || error.message);
        return Promise.reject(error);
    }
);

export default api;
