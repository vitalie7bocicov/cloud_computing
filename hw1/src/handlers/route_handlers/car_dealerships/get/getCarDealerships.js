const getCarDealershipsQuery = require("../../../../repository/queries/select_queries/getCarDealershipsQuery");
const InternalServerError = require("../../../../exceptions/InternalServerError");

async function getCarDealerships(){
    try{
        return await getCarDealershipsQuery();
    }
    catch (e){
        throw new InternalServerError();
    }
}

module.exports = {getCarDealerships}