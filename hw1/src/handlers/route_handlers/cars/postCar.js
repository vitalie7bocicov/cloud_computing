
const Car = require('../../../models/Car')
const BadRequest = require('../../../exceptions/BadRequest')
const insertCar = require('../../../repository/queries/insert_queries/insertCarQuery')
const InternalServerError = require("../../../exceptions/InternalServerError");
const PreconditionFailed = require("../../../exceptions/PreconditionFailed");
const isValidCarBody = require("../../../helpers/isValidCarBody");
const existsDealership = require("../../../helpers/existsCarDealership");

async function postCar(bodyObj){
    if(!isValidCarBody(bodyObj))
        throw new BadRequest();
    let precondition = await existsDealership(bodyObj.dealershipId);
    if(!precondition)
        throw new PreconditionFailed();
    let car = new Car(bodyObj.brand,bodyObj.model,bodyObj.year, bodyObj.dealershipId);
    try{
        return await insertCar(car);
    }
    catch (e){
        throw new InternalServerError();
    }
}

module.exports = postCar