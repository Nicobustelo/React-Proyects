import axios from 'axios';

const baseURL = 'http://localhost:3001/questions';

const getAll = () => {
	return axios.get(baseURL).then(res => res.data);
};

const createAnswer = newAnswer => {
	return axios.post(baseURL, newAnswer).then(res => res.data);
};

export default { getAll, createAnswer };
