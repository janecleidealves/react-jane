import axios from 'axios';

const api= axios.create({
    baseURL: 'https://site-pessoal-api-xwjo.onrender.com/api'
});
export default api;
