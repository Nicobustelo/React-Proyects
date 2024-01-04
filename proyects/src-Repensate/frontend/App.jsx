import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageContent from './components/PageContent';
import questionsServices from './services/questions';
import axios from 'axios';

const App = () => {
	const [question, setQuestion] = useState({});
	const [answers, setAnswers] = useState([]);
	const [comment, setComment] = useState('');

	useEffect(() => {
		function generateRandomInteger(min, max) {
			return Math.floor(min + Math.random() * (max - min + 1));
		}

		questionsServices.getAll().then(response => {
			const questions = response;
			const largo = questions.length;
			const randomId = generateRandomInteger(1, largo) - 1;
			console.log('randomId:', randomId);

			setQuestion(questions[randomId]);
			setAnswers(questions[randomId].answers);
		});

		console.log(question);
		console.log(answers);
	}, []);

	const clickHandler = () => {
		console.log(comment);
		axios
			.post('http://localhost:3001/questions', { comment })
			.then(response => console.log(response.data))
			.catch(error => console.error(error));
	};

	const commentChangeHandler = event => {
		const commentValue = event.target.value;
		console.log(event.target.value);
		setComment(commentValue);
	};

	return (
		<div style={{ background: '#000', color: '#fff', minHeight: '100vh' }}>
			<Navbar />
			<PageContent
				question={question}
				answers={answers}
				comment={comment}
				commentChangeHandler={commentChangeHandler}
				clickHandler={clickHandler}
			/>
			{/* <Footer /> */}
		</div>
	);
};

export default App;
