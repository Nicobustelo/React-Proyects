import axios from 'axios';

const baseURL = 'http://localhost:3001/list';

const getAll = () => {
	return axios.get(baseURL).then(response => response.data);
};

const create = newNote => {
	return axios.post(baseURL, newNote).then(response => response.data);
};

const deleteTask = id => {
	return axios.delete(`${baseURL}/${id}`).then(response => response.data);
};

const updateState = (id, updatedNote) => {
	return axios
		.put(`${baseURL}/${id}`, updatedNote)
		.then(response => response.data);
};

export default { getAll, create, deleteTask, updateState };
