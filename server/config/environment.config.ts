import dotenv from 'dotenv'
dotenv.config()

const environment = process.env.NODE_ENV || 'local'

export const Environment = {
	local: {
		name: 'local',
		host: 'localhost'
	},
	development: {
		name: 'development',
		host: 'localhost'
	},
	testing: {
		name: 'testing',
		host: 'localhost'
	},
	production: {
		name: 'production',
		host: 'localhost'
	}
}

export const ENV = Environment[environment]
