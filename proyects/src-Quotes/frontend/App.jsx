import { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
	const [quote, setQuote] = useState('');
	const [author, setAuthor] = useState('');

	useEffect(() => {
		axios.get('http://localhost:3001/getQuote').then(response => {
			console.log('initial quote...', response.data);
			setQuote(response.data.quoteText);
			setAuthor(response.data.quoteAuthor);
		});
	}, []);

	const getNewQuote = () => {
		axios
			.get('http://localhost:3001/getQuote')
			.then(response => {
				console.log('new quote...', response.data);
				setQuote(response.data.quoteText);
				setAuthor(response.data.quoteAuthor);
			})
			.catch(error => {
				console.error(error);
			});
	};

	const quoteStyle = {
		color: 'black',
		fontFamily: 'AmstelvarAlpha',
		fontStyle: 'normal',
	};

	const authorStyle = {
		color: 'grey',
	};

	return (
		<div>
			<h2 style={quoteStyle}>{quote}</h2>
			<h3 style={authorStyle}>{author}</h3>
			<button onClick={getNewQuote}>new quote</button>
		</div>
	);
};

export default App;
