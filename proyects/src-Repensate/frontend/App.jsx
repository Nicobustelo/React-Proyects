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
		function randomIntFromInterval(min, max) {
			return Math.floor(Math.random() * (max - min + 1) + min);
		}

		questionsServices.getAll().then(response => {
			const questions = response;
			const largo = questions.length;
			const randomId = randomIntFromInterval(1, largo - 1) - 1;
			console.log('randomId:', randomId);

			setQuestion(questions[randomId]);
			setAnswers(questions[randomId].answers);
		});
	}, []);

	const getCurrentTime = () => {
		return new Date();
	};

	const commentPostHandler = () => {
		console.log('comment: ', comment);
		const questionID = Number(question.id);
		console.log('question ID: ', questionID);
		const newAnswer = {
			id: answers.length + 1,
			user: 'dios',
			createdAt: getCurrentTime(),
			answer: comment,
			upVotes: 0,
			downVotes: 0,
		};
		const updatedAnswers = {
			...question,
			answers: answers.concat(newAnswer),
		};

		questionsServices
			.createAnswer(questionID, updatedAnswers)
			.then(res => console.log(res));

		setAnswers(answers.concat(newAnswer));
		setQuestion(updatedAnswers);
	};

	const commentChangeHandler = event => {
		const commentValue = event.target.value;
		console.log(event.target.value);
		setComment(commentValue);
	};

	const upButton = (id, qoa) => {
		if (qoa === 1) {
			const upQuestion = {
				...question,
				upVotes: question.upVotes + 1,
			};
			axios.put(`http://localhost:3001/questions/${id}`, upQuestion);
			setQuestion(upQuestion);
		} else if (qoa === 2) {
			let updatedAnswers = [...answers];
			updatedAnswers = updatedAnswers.map(ans => {
				if (Number(ans.id) === Number(id)) {
					const upAnswer = {
						...ans,
						upVotes: ans.upVotes + 1,
					};
					return upAnswer;
				} else {
					return ans;
				}
			});
			const updatedQuestion = {
				...question,
				answers: updatedAnswers,
			};
			setAnswers(updatedAnswers);
			setQuestion(updatedQuestion);
		}
	};

	const downButton = (id, qoa) => {
		if (qoa === 1) {
			const downQuestion = {
				...question,
				downVotes: question.downVotes + 1,
			};
			axios.put(`http://localhost:3001/questions/${id}`, downQuestion);
			setQuestion(downQuestion);
		} else if (qoa === 2) {
			let updatedAnswers = [...answers];
			updatedAnswers = updatedAnswers.map(ans => {
				if (Number(ans.id) === Number(id)) {
					const downAnswer = {
						...ans,
						downVotes: ans.downVotes + 1,
					};
					return downAnswer;
				} else {
					return ans;
				}
			});
			const updatedQuestion = {
				...question,
				answers: updatedAnswers,
			};
			setAnswers(updatedAnswers);
			setQuestion(updatedQuestion);
		}
	};

	return (
		<div style={{ background: '#000', color: '#fff', minHeight: '100vh' }}>
			<Navbar />
			<PageContent
				question={question}
				answers={answers}
				comment={comment}
				commentChangeHandler={commentChangeHandler}
				commentPostHandler={commentPostHandler}
				upButton={upButton}
				downButton={downButton}
			/>
			<Footer />
		</div>
	);
};

export default App;
