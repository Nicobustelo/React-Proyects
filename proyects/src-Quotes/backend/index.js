const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
	res.send('<h1>Hello world</h1>');
});

app.get('/getQuote', async (req, res) => {
	try {
		const response = await axios.get(
			'http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en'
		);
		res.json(response.data);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Internal Server Error' });
	}
});

const PORT = 3001;
app.listen(PORT, () => {
	console.log(`server is running on port ${PORT}`);
});
