const {Pool} = require("pg")

const pool = new Pool({
    connectionString: process.env.dbUrl,
})

module.exports = pool;