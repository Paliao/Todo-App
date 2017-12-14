const server = require('./config/server')
require('./config/database')
const initRoutes = require('./config/routes')
initRoutes(server)