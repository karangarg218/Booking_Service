const dotenv = require('dotenv')
dotenv.config(  )
module.exports={
    PORT : process.env.PORT,
    DB_SYNC:process.env.db_sync
}