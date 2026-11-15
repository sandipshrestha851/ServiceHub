const pool = require("./pool")

async function registerUser(name,email,password){
    await pool.query(`INSERT INTO customerInfo(cust_name,cust_email,cust_passwordHash) VALUES ($1,$2,$3)`,[name,email,password])
}

async function getUserCredentials(email){
    const result = await pool.query("SELECT * FROM customerInfo WHERE cust_email = $1",[email])
    return result.rows[0];
}

module.exports = {
    registerUser,
    getUserCredentials
}