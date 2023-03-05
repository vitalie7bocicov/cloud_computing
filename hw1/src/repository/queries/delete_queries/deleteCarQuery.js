const db_con = require("../../dbConnection");
const NotFound = require("../../../exceptions/NotFound");

function deleteCar(id){
    return new Promise((resolve, reject) => {
        let sql = "DELETE FROM cars WHERE id = ?";
        db_con.query(sql,
            [id],
            (err, result) => {
                if (err){
                    reject(err);
                    return;
                }
                if(result.affectedRows === 1)
                {
                    const responseObj = {
                        status : "terminated",
                        message : "This car is no longer available!"
                    }
                    resolve(responseObj);
                }
                else {
                    reject(new NotFound());
                }
            });
    });
}

module.exports = deleteCar

