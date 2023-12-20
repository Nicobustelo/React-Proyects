import { useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import List from './components/List';
import toDoService from './services/toDo';

const App = () => {
	const [list, setList] = useState([]);
	const [text, setText] = useState('');

	const modifyText = event => {
		setText(event.target.value);
	};

	const hook = () => {
		toDoService.getAll().then(response => {
			setList(response);
		});
	};

	useEffect(hook, []);

	const addNote = event => {
		event.preventDefault();
		const newNote = {
			content: text,
			estado: false,
		};
		toDoService.create(newNote).then(response => {
			setList(list.concat(response));
			setText('');
		});
	};

	const deleteTarea = id => {
		toDoService.deleteTask(id).then(response => {
			setList(list.filter(tarea => tarea.id !== id));
		});
	};

	const toggleState = id => {
		const copyNote = list.find(task => task.id === id);
		const updatedNote = { ...copyNote, estado: !copyNote.estado };
		toDoService.updateState(id, updatedNote).then(response => {
			setList(list.map(task => (task.id !== id ? task : response)));
		});
	};

	return (
		<div>
			<Header text="Ye Old ToDo List" />
			<List list={list} deleteTarea={deleteTarea} toggleState={toggleState} />
			<Form text={text} modifyText={modifyText} addNote={addNote} />
		</div>
	);
};

export default App;
