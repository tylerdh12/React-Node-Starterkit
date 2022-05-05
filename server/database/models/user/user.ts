import { Connection } from './../../../config/connections.config'
import { DataTypes, Model } from 'sequelize'
import { IUser } from './user.interface'
import { db } from './../../../config/database.config'

/* -------------------------------------------------------------------------- */
/*                                 User Model                                 */
/* -------------------------------------------------------------------------- */
class User extends Model<IUser> {
	/* ---------------------------- Type Declarations --------------------------- */
	id?: number
	name!: string
	email!: string

	/* --------------------------- Method Declarations -------------------------- */
	static getAllUsers: () => Promise<User[]>
	static getUserById: (id: number) => Promise<User | null>
	static createUser: (user: IUser) => Promise<User>
	static updateUser: (id: number, user: IUser) => Promise<[affectedCount: number]>
	static deleteUser: (id: number) => Promise<number>
}

/* -------------------------------------------------------------------------- */
/*                                Model Schema                                */
/* -------------------------------------------------------------------------- */
User.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false
		}
	},
	/* --------------------------- Model Configuration -------------------------- */
	{
		sequelize: db,
		modelName: 'User',
		paranoid: true,
		schema: Connection.schema
	}
)

/* -------------------------------------------------------------------------- */
/*                                   Methods                                  */
/* -------------------------------------------------------------------------- */

/**
 * Get all users
 * @returns {Promise<IUser[]>}
 */
User.getAllUsers = async () => {
	return await User.findAll()
}

/**
 * Get user by id
 * @param {number} id
 * @returns {Promise<IUser | null>}
 */
User.getUserById = async (id: number) => {
	return await User.findByPk(id)
}

/**
 * Create user
 * @param {IUser} user
 * @returns {Promise<IUser>}
 */
User.createUser = async (user: IUser) => {
	return await User.create(user)
}

/**
 * Update user
 * @param {number} id
 * @param {IUser} user
 */
User.updateUser = async (id: number, user: IUser) => {
	return await User.update(user, {
		where: {
			id
		}
	})
}

/**
 * Delete a single user by id
 * @param {number} id
 * @returns {Promise<number>}
 */
User.deleteUser = async (id: number) => {
	return await User.destroy({
		where: {
			id
		}
	})
}

export default User
