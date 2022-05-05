/* ---------------------------- Import all Models --------------------------- */
import User from './user/user'

/* --------------------------- Import the Database -------------------------- */
import { db } from './../../config/database.config'

/* ------------------ Associate all models to the Database ------------------ */
db['User'] = new User()

export default db
