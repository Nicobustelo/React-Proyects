const config = require('./utils/config');
const express = require('express');
const app = express();
const cors = require('cors');
const middleware = require('./utils/middleware');
const logger = require('./utils/logger');
const mongoose = require('mongoose');
const questionsRouter = require('./controllers/questions');

mongoose.set('strictQuery', false);

logger.info('connecting to: ', config.MONGO_URI);

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

app.use('/questions', questionsRouter);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
