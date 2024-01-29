import axios from 'axios';

const baseURL = 'http://localhost:3001/questions';

const getAll = () => {
	return axios.get(baseURL).then(res => res.data);
};

const createAnswer = ({ id, newAnswer }) => {
	return axios
		.put(`${baseURL}/${id}`, newAnswer)
		.then(res => res.data)
		.catch(err => console.error('error:', err));
};

const changeAnswerVotes = () => {
	return 'not working yet';
};

const createQuestion = newQuestion => {
	return axios
		.post(`${baseURL}`, newQuestion)
		.then(res => res.data)
		.catch(err => console.error('error:', err));
};

const changeQuestionVotes = (id, modifiedQuestion) => {
	return axios
		.put(`${baseURL}/${id}`, modifiedQuestion)
		.then(res => res.data)
		.catch(err => console.error('error:', err));
};

export default { getAll, createAnswer, createQuestion, changeQuestionVotes };
