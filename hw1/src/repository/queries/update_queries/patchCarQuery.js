const db_con = require("../../dbConnection");

function patchCarQuery(id, dealershipId) {
    return new Promise((resolve, reject) => {
        let sql = "UPDATE cars SET dealershipId = ? WHERE id=?";
        db_con.query(sql,
            [dealershipId, id],
            (err) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve({})
            });
    });
}
module.exports = patchCarQuery

