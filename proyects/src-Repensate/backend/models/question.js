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

module.exports = Question;
