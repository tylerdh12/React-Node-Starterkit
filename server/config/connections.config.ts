import path from 'path'
import { ENV } from './environment.config'
const ConnectionOptions = require(path.resolve(__dirname, `./connections.json`))

const Connection = ConnectionOptions[ENV.name]

export { Connection, ConnectionOptions }
