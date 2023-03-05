
const mysql = require("mysql");

// Creating connection
let db_con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "car-dealerships"
});

// Connect to MySQL server
db_con.connect((err) => {
    if (err) {
        console.log("Database Connection Failed!", err);
    } else {
        console.log("Connected to Database!");
    }
});

module.exports = db_con;