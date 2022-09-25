import axios from 'axios';

const api = axios.create({
	baseURL: `https://api.exchangerate.host`,
	responseType: 'json',
});

export default api;
