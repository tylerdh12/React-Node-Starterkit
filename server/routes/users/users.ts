import User from './../../database/models/user/user'
import express from 'express'
const usersRouter = express()

usersRouter.get('/', async (req, res) => {
	const userList = await User.findAll()

	if (userList.length > 0) {
		res
			.json({
				status: 'success',
				message: 'Welcome to the Users Route of my API',
				users: userList
			})
			.status(200)
	} else {
		res
			.json({
				status: 'success',
				message: 'Welcome to the Users Route of my API',
				users: userList
			})
			.status(400)
	}
})

usersRouter.post('/', async (req, res) => {
	const { name, email } = req.body

	const newUser = await User.createUser({
		name,
		email
	})

	res.json({
		status: 'success',
		message: 'New User has been created',
		user: newUser
	})
})

export default usersRouter
