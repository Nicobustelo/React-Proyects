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
	const [newQuestionValue, setNewQuestionValue] = useState('');
	const [newDescriptionValue, setNewDescriptionValue] = useState('');

	function randomIntFromInterval(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}

	useEffect(() => {
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
			questionsServices
				.changeQuestionVotes(id, upQuestion)
				.then(res => console.log(res));
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
			questionsServices
				.changeQuestionVotes(id, downQuestion)
				.then(res => console.log(res));
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

	const postQuestion = () => {
		const newQuestion = {
			id: randomIntFromInterval(1, 50000),
			user: 'jesus',
			createdAt: getCurrentTime(),
			question: newQuestionValue,
			description: newDescriptionValue,
			upVotes: 0,
			downVotes: 0,
			answers: [],
		};
		console.log(newQuestion);
		axios.post('http://localhost:3001/questions', newQuestion);
	};

	const changeNewQuestionValue = event => {
		console.log(event.target.value);
		setNewQuestionValue(event.target.value);
	};

	const changeNewDescriptionValue = event => {
		console.log(event.target.value);
		setNewDescriptionValue(event.target.value);
	};

	return (
		<div style={{ background: '#000', color: '#fff', minHeight: '100vh' }}>
			<Navbar
				changeNewDescriptionValue={changeNewDescriptionValue}
				changeNewQuestionValue={changeNewQuestionValue}
				newQuestionValue={newQuestionValue}
				newDescriptionValue={newDescriptionValue}
				postQuestion={postQuestion}
			/>
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
