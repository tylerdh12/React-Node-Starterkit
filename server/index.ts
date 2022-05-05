import bodyParser from 'body-parser'
import { db } from './config/database.config'
import cors from 'cors'
import express from 'express'
import morgan from 'morgan'
import routes from './routes'
const app = express()

/* ---------------------- Configuration for CORS Access --------------------- */
const whitelistDomains = ['http://localhost:3000']

/* -------------------------- Middleware Functions -------------------------- */
app.use(bodyParser.json())
app.use(
	cors({
		origin: whitelistDomains,
		methods: ['GET', 'PUT', 'POST', 'DELETE'],
		credentials: false
	})
)
app.use(morgan('dev'))

/* -------------------------------------------------------------------------- */
/*                     Routes Handler for the /API Routes                    */
/* -------------------------------------------------------------------------- */
app.use('/api', routes)

/* -------------------------------------------------------------------------- */
/*                                Root Request                               */
/* -------------------------------------------------------------------------- */
app.get('/', function (req, res) {
	res
		.json({
			status: 'success',
			message: 'Welcome to the Root of my API'
		})
		.status(200)
})

/* -------------------------------------------------------------------------- */
/*                           Connect to the Database                          */
/* -------------------------------------------------------------------------- */

const databaseSync = async () => {
	try {
		await db.sync({ alter: true })
		console.log('All models have synced successfully')
	} catch (error) {
		console.error(`An error has occurred while syncing the database: `, error)
	}
}

try {
	db.authenticate()
	console.log('Connection has been established successfully.')
} catch (error) {
	console.error('Unable to connect to the database:', error)
}

/* -------------------------------------------------------------------------- */
/*                              Initialize Server                            */
/* -------------------------------------------------------------------------- */
app.listen(3000, async function () {
	await databaseSync()
	console.log('Server started on port: 3000')
})
