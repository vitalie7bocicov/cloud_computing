const db_con = require("../../dbConnection");

function getCarsByDealershipIdQuery(id){
    return new Promise((resolve, reject) => {
        let sql = "SELECT * FROM cars WHERE dealershipId = ?";
        db_con.query(sql, [id],
            (err, result) => {
                if (err){
                    reject(err);
                    return;
                }
                resolve(result);
            });
    });
}

module.exports = getCarsByDealershipIdQuery
