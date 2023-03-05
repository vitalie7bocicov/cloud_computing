const getCarDealershipByIdQuery = require("../repository/queries/select_queries/getCarDealershipByIdQuery");

async function existsDealership(dealershipId) {
    try{
        await getCarDealershipByIdQuery(dealershipId);
        return true;
    }
    catch (error){
        return false;
    }
}

module.exports = existsDealership