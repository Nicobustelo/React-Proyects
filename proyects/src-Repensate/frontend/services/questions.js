import axios from 'axios';

const baseURL = 'http://localhost:3001/questions';

const getAll = () => {
	return axios.get(baseURL).then(res => res.data);
};

const createAnswer = ({ id, newAnswer }) => {
	return axios.put(`${baseURL}/${id}`, newAnswer).then(res => res.data);
};

const changeQuestionVotes = (id, modifiedQuestion) => {
	return axios.put(`${baseURL}/${id}`, modifiedQuestion).then(res => res.data);
};

export default { getAll, createAnswer, changeQuestionVotes };
