import axios from 'axios';

const api = axios.create({
    // baseURL: "https://api.github.com",
    baseURL: "https://rickandmortyapi.com/api",
});

export default api;