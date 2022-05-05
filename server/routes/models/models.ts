import express from 'express'
const modelRouter = express()

modelRouter.get('/', (req, res) => {
	res
		.json({
			status: 'success',
			message: 'Welcome to the Models Route of my API'
		})
		.status(200)
})

export default modelRouter
