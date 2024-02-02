require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const Note = require('./models/note');
const User = require('./models/user');
const usersRouter = require('./controllers/users');
const loginRouter = require('./controllers/login');
const jwt = require('jsonwebtoken');

const requestLogger = (request, response, next) => {
	console.log('Method:', request.method);
	console.log('Path:  ', request.path);
	console.log('Body:  ', request.body);
	console.log('---');
	next();
};

app.use(cors());
app.use(express.static('dist'));
app.use(express.json());
app.use(requestLogger);

const getTokenFrom = request => {
	const authorization = request.get('authorization');
	if (authorization && authorization.startsWith('Bearer ')) {
		return authorization.replace('Bearer ', '');
	}
	return null;
};

app.get('/', (req, res) => {
	res.send('<h1>Hello World!</h1>');
});

app.get('/api/notes', async (req, res) => {
	const notes = await Note.find({}).populate('user', { username: 1, name: 1 });

	res.json(notes);
});

const generateId = () => {
	const maxId = notes.length > 0 ? Math.max(...notes.map(n => n.id)) : 0;
	return maxId + 1;
};

app.post('/api/notes', async (request, response) => {
	const body = request.body;

	const decodedToken = jwt.verify(getTokenFrom(request), process.env.SECRET);
	if (!decodedToken.id) {
		return response.status(401).json({ error: 'token invalid' });
	}
	const user = await User.findById(decodedToken.id);

	const note = new Note({
		content: body.content,
		important: body.important === undefined ? false : body.important,
		user: user.id,
	});

	const savedNote = await note.save();
	user.notes = user.notes.concat(savedNote._id);
	await user.save();

	response.status(201).json(savedNote);
});

app.get('/api/notes/:id', (request, response, next) => {
	Note.findById(request.params.id)
		.then(note => {
			if (note) {
				response.json(note);
			} else {
				response.status(404).end();
			}
		})
		.catch(error => next(error));
});

app.delete('/api/notes/:id', (req, res, next) => {
	Note.findByIdAndDelete(req.params.id)
		.then(response => {
			res.status(204).end();
		})
		.catch(error => next(error));
});

app.put('/api/notes/:id', (request, response, next) => {
	const { content, important } = request.body;

	Note.findByIdAndUpdate(
		request.params.id,

		{ content, important },
		{ new: true, runValidators: true, context: 'query' }
	)
		.then(updatedNote => {
			response.json(updatedNote);
		})
		.catch(error => next(error));
});

app.use('/api/users', usersRouter);
app.use('/api/login', loginRouter);

const unknownEndpoint = (request, response) => {
	response.status(404).send({ error: 'unknown endpoint' });
};

app.use(unknownEndpoint);

const errorHandler = (error, request, response, next) => {
	console.error(error.message);

	if (error.name === 'CastError') {
		return response.status(400).send({ error: 'malformatted id' });
	} else if (error.name === 'ValidationError') {
		return response.status(400).json({ error: error.message });
	} else if (error.name === 'JsonWebTokenError') {
		return response.status(401).json({ error: error.message });
	} else if (error.name === 'TokenExpiredError') {
		return response.status(401).json({
			error: 'token expired',
		});
	}

	next(error);
};

app.use(errorHandler);

module.exports = app;
