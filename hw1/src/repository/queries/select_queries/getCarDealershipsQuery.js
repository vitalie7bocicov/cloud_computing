const db_con = require("../../dbConnection");

function getCarDealershipsQuery(){
    return new Promise((resolve, reject) => {
        let sql = "SELECT * FROM car_dealerships";
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

module.exports = getCarDealershipsQuery

