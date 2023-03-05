const db_con = require("../../dbConnection");

function updateCarDealershipsQuery(dealership){
    return new Promise((resolve, reject) => {
        let sql = "UPDATE car_dealerships SET name = ?, city = ? , street = ?, isOpen = ? WHERE id=?;";
        db_con.query(sql,
            [dealership.name, dealership.city, dealership.street, dealership.isOpen, dealership.id],
            (err) => {
                if (err){
                    reject(err);
                    return;
                }
                resolve(dealership);
            });
    });
}

module.exports = updateCarDealershipsQuery

