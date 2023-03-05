const db_con = require("../../dbConnection");

function getCarsQuery(){
    return new Promise((resolve, reject) => {
        let sql = "SELECT * FROM cars";
        db_con.query(sql,
            (err, result) => {
                if (err){
                    reject(err);
                    return;
                }
                resolve(result);
            });
    });
}

module.exports = getCarsQuery

