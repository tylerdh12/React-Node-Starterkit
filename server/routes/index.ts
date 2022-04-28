import express from 'express'
import models from './models'
const router = express.Router()

/* --------------------------- Routes beyond /api --------------------------- */
router.use('/models', models)

/* ------------------------------ Route - /api ------------------------------ */
router.get('/', (req, res, next) => {
	res.json({
		status: 'success',
		message: 'Welcome to the API Route'
	})
	next()
})

export default router
