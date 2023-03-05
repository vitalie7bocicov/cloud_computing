const getCarByIdQuery = require("../../../../repository/queries/select_queries/getCarByIdQuery");
const NotFound = require("../../../../exceptions/NotFound");
const InternalServerError = require("../../../../exceptions/InternalServerError");

async function getCarByID(id){
    try{
        return await getCarByIdQuery(id);
    }
    catch (error){

        if(error.message === "404"){
            throw(new NotFound());
        }
        throw(new InternalServerError());
    }
}

module.exports = getCarByID