const db_con = require("../../dbConnection");

function insertCarQuery(car){
    return new Promise((resolve, reject) => {
        let sql = "INSERT INTO cars (brand, model, year, dealershipId) VALUES (?, ? , ?, ?)";
        db_con.query(sql,
            [car.brand,car.model,car.year, car.dealershipId],
            (err, result) => {
                if (err){
                    reject(err);
                    console.log(err);
                    return;
                }
                car.id = result.insertId;
                resolve(car);
            });
        });
}

module.exports = insertCarQuery

