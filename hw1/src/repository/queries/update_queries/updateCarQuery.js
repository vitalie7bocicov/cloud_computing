const db_con = require("../../dbConnection");
const NotFound = require("../../../exceptions/NotFound");

function updateCarQuery(car){
    return new Promise((resolve, reject) => {
        let sql = "UPDATE cars SET brand = ?, model = ? , year = ?, dealershipId = ? WHERE id=?;";
        db_con.query(sql,
            [car.brand, car.model, car.year, car.dealershipId, car.id],
            (err, result) => {
                if (err){
                    reject(err);
                    return;
                }
                if(result.affectedRows === 1)
                {
                    resolve(car);
                }
                else {
                    reject(new NotFound());
                }
            });
    });
}

module.exports = updateCarQuery

