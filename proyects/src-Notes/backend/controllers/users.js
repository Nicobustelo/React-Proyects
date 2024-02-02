const bcrypt = require('bcrypt');
const usersRouter = require('express').Router();
const User = require('../models/user');

usersRouter.get('/', async (req, res) => {
	const users = await User.find({}).populate('notes', {
		content: 1,
		important: 1,
	});

	res.json(users);
});

usersRouter.get('/:id', async (req, res) => {
	const id = req.params.id;
	const user = await User.findById(id);
	res.json(user);
});

usersRouter.post('/', async (req, res) => {
	const { username, name, password } = req.body;

	const saltRounds = 10;
	const passwordHash = await bcrypt.hash(password, saltRounds);

	const user = new User({
		username,
		name,
		passwordHash,
	});

	const savedUser = await user.save();

	res.status(201).json(savedUser);
});

module.exports = usersRouter;
