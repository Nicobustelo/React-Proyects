const config = require('./utils/config');
const express = require('express');
const app = express();
const cors = require('cors');
const middleware = require('./utils/middleware');
const logger = require('./utils/logger');
const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
	id: String,
	user: String,
	createdAt: String,
	question: String,
	description: String,
	upVotes: Number,
	downVotes: Number,
	answers: [
		{
			id: String,
			user: String,
			createdAt: String,
			answer: String,
			upVotes: Number,
			downVotes: Number,
		},
	],
});

const Question = mongoose.model('Question', questionSchema);

mongoose.set('strictQuery', false);

logger.info('connecting to', config.MONGO_URI);

mongoose
	.connect(config.MONGO_URI)
	.then(() => {
		logger.info('connected to MongoDB');
	})
	.catch(error => {
		logger.error('error connecting to MongoDB:', error.message);
	});

app.use(cors());
app.use(express.json());
app.use(middleware.requestLogger);

app.get('/', (req, res) => {
	res.send('<h1>Hello World</h1>');
});

app.get('/questions', (req, res) => {
	Question.find({}).then(questions => {
		res.json(questions);
	});
});

app.get('/questions/:id', (req, res) => {
	Question.findById(req.params.id)
		.then(question => {
			if (question) {
				res.json(question);
			} else {
				res.status(404).end();
			}
		})
		.catch(error => next(error));
});

app.post('/questions', (req, res) => {
	logger.info(req.body);
	res.json(req.body);
});

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
