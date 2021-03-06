import { Model } from 'sequelize/types'

/* ------------------------- Standard User Interface ------------------------ */
export interface IUser {
	id?: number
	name: string
	email: string
}

/* ---------------------------- Method Interfaces --------------------------- */
export interface IUserModel extends Model<IUser> {
	getAllUsers: () => Promise<IUser[]>
	getUserById: (id: number) => Promise<IUser | null>
	createUser: (user: IUser) => Promise<IUser>
	updateUser: (id: number, user: IUser) => Promise<[affectedCount: number]>
	deleteUser: (id: number) => Promise<number>
}
