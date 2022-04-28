import bodyParser from 'body-parser'
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
		credentials: true
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
/*                              Initialize Server                            */
/* -------------------------------------------------------------------------- */
app.listen(3000, function () {
	console.log('Server started on port: 3000')
})
