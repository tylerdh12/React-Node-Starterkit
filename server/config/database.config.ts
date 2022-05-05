import { Sequelize } from 'sequelize'
import { Connection } from './connections.config'

export const db = new Sequelize(`postgres://${Connection.username}:${Connection.password}@${Connection.host}:${Connection.port}/${Connection.database}`, {
	logging: false
})
