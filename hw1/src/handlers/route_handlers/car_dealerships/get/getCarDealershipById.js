const getCarDealershipByIdQuery = require("../../../../repository/queries/select_queries/getCarDealershipByIdQuery");
const NotFound = require("../../../../exceptions/NotFound");
const InternalServerError = require("../../../../exceptions/InternalServerError");

async function getCarDealershipById(id){
    try{
        return await getCarDealershipByIdQuery(id);
    }
    catch (error){

        if(error.message === "404"){
            throw(new NotFound());
        }
        throw(new InternalServerError());
    }
}

module.exports = getCarDealershipById