const db_con = require("../../dbConnection");

function updateCarDealershipsQuery(id, isOpen){
    return new Promise((resolve, reject) => {
        let sql = "UPDATE car_dealerships SET isOpen = ? WHERE id=?;";
        db_con.query(sql,
            [isOpen, id],
            (err) => {
                if (err){
                    reject(err);
                    return;
                }
                resolve({});
            });
    });
}

module.exports = updateCarDealershipsQuery

