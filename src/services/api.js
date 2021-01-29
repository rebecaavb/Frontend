//Pasta services que vai armazenar qualquer tipo de arquivo que vai ser a comunicação com um serviço externo

import axios from 'axios';

//criando instância do axios
const api = axios.create({
    baseURL: 'http://localhost:3000'
});

export default api;