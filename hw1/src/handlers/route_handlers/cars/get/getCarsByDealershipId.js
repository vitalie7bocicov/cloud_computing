
const InternalServerError = require("../../../../exceptions/InternalServerError");
const getCarsByDealershipIdQuery = require("../../../../repository/queries/select_queries/getCarsByDealershipIdQuery");
const existsDealership = require("../../../../helpers/existsCarDealership");
const NotFound = require("../../../../exceptions/NotFound");

async function getCarsByDealershipId(id){
    let resourceExists = await existsDealership(id);
    if(!resourceExists)
        throw new NotFound();
    try{
        return await getCarsByDealershipIdQuery(id);
    }
    catch (e){
        throw new InternalServerError();
    }
}

module.exports = getCarsByDealershipId