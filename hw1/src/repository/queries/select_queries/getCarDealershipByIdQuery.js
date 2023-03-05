const db_con = require("../../dbConnection");

function getCarDealershipByIdQuery(id){
    return new Promise((resolve, reject) => {
        let sql = "SELECT * FROM car_dealerships where ID = ?";
        db_con.query(sql, [id],
            (err, result) => {
                if (err){
                    reject(err);
                    return;
                }
                if(result.length===0){
                    reject(new Error("404"));
                    return;
                }
                resolve(result);
            });
    });
}

module.exports = getCarDealershipByIdQuery

