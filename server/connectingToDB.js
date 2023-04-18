require('dotenv').config();
const mysql = require('mysql')

function connectingToDB() {
    const db = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        database: process.env.NAME_BASE,//database: "libweb",
        password: process.env.PASSWORD
    });
    return db;
}

module.exports = {
  connectingToDB
};