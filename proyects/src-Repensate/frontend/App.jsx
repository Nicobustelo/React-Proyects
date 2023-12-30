import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageContent from './components/PageContent';

const App = ({ data }) => {
	const [question, setQuestion] = useState({});
	const [answers, setAnswers] = useState([]);

	useEffect(() => {
		const largo = data.questions.length;

		function generateRandomInteger(min, max) {
			return Math.floor(min + Math.random() * (max - min + 1));
		}

		const randomId = generateRandomInteger(1, largo) - 1;

		console.log(randomId);

		setQuestion(data.questions[randomId]);
		setAnswers(data.questions[randomId].answers);
	}, []);

	console.log(question);
	console.log(answers);

	return (
		<div style={{ background: '#000', color: '#fff', minHeight: '100vh' }}>
			<Navbar />
			<PageContent question={question} answers={answers} />
			{/* <Footer /> */}
		</div>
	);
};

export default App;
