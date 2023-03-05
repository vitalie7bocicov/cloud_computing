const db_con = require("../../dbConnection");

function insertCarDealershipsQuery(dealership){
    return new Promise((resolve, reject) => {
        let sql = "INSERT INTO car_dealerships (name, city, street, isOpen) VALUES (?, ? , ? , ?)";
        db_con.query(sql,
            [dealership.name, dealership.city, dealership.street, dealership.isOpen],
            (err, result) => {
                if (err){
                    reject(err);
                    return;
                }
                dealership.id = result.insertId;
                resolve(dealership);
            });
        });
}

module.exports = insertCarDealershipsQuery

