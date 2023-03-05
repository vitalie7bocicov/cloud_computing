const getCarsQuery = require("../../../../repository/queries/select_queries/getCarsQuery");
const InternalServerError = require("../../../../exceptions/InternalServerError");

async function getCars(){
    try{
        return await getCarsQuery();
    }
    catch (e){
        throw new InternalServerError();
    }
}


module.exports = getCars