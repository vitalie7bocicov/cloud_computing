const BadRequest = require('../../../exceptions/BadRequest')
const patchCarQuery = require('../../../repository/queries/update_queries/patchCarQuery')
const InternalServerError = require("../../../exceptions/InternalServerError");
const NotFound = require("../../../exceptions/NotFound");
const PreconditionFailed = require("../../../exceptions/PreconditionFailed");
const getCarByIdQuery = require("../../../repository/queries/select_queries/getCarByIdQuery")
const existsDealership = require("../../../helpers/existsCarDealership");

async function existsCar(id) {
    try{
        await getCarByIdQuery(id);
        return true;
    }
    catch (error){
        return false;
    }
}

async function patchCar(bodyObj, id){
    if(!bodyObj.hasOwnProperty('dealershipId'))
        throw(new BadRequest());
    let precondition = await existsDealership(bodyObj.dealershipId);
    if(!precondition)
        throw new PreconditionFailed();
    precondition = await existsCar(id);
    if(!precondition)
        throw new NotFound();

    try{
        return await patchCarQuery(id, bodyObj.dealershipId);
    }
    catch (error){
        throw new InternalServerError();
    }
}

module.exports = patchCar;