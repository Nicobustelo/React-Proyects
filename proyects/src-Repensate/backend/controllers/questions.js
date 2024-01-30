const questionsRouter = require('express').Router();
const Question = require('../models/question');

// GET all questions
questionsRouter.get('/', (req, res) => {
	Question.find({}).then(questions => {
		res.json(questions);
	});
});

// GET single question
questionsRouter.get('/:id', (req, res, next) => {
	const id = req.params.id;

	Question.findOne({ id })
		.then(question => {
			if (question) {
				res.json(question);
			} else {
				res.status(404).end();
			}
		})
		.catch(error => next(error));
});

// POST new question
questionsRouter.post('/', (req, res, next) => {
	const body = req.body;

	const question = new Question(body);

	question
		.save()
		.then(savedQuestion => {
			res.json(savedQuestion);
		})
		.catch(error => next(error));
});

// POST new answer (should maybe change this, currently updating the whole question with the new answer added to the answers array)
// DELETE single question
questionsRouter.delete('/:id', (req, res, next) => {
	const id = req.params.id;

	Question.findOneAndDelete({ id: id })
		.then(deletedQuestion => {
			if (deletedQuestion) {
				res.status(204).end();
			} else {
				res.status(404).json({ error: 'Question not found' });
			}
		})
		.catch(error => next(error));
});

// UPDATE question votes
questionsRouter.put('/:id', (req, res, next) => {
	const updatedQuestion = req.body;
	const id = req.params.id;

	Question.findOneAndUpdate({ id: id }, updatedQuestion, { new: true })
		.then(updatedQuest => {
			if (updatedQuest) {
				res.json(updatedQuest);
			} else {
				res.status(404).json({ error: 'Question not found' });
			}
		})
		.catch(error => next(error));
});

module.exports = questionsRouter;
