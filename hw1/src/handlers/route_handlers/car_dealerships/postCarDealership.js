const BadRequest = require('../../../exceptions/BadRequest')
const insertCarDealership = require('../../../repository/queries/insert_queries/insertCarDealershipQuery')
const InternalServerError = require("../../../exceptions/InternalServerError");
const CarDealership = require("../../../models/CarDealership");
const isValidCarDealershipBody = require("../../../helpers/isValidCarDealershipBody");



async function postCarDealership(bodyObj){
    if(!isValidCarDealershipBody(bodyObj))
        throw new BadRequest();
    let dealership = new CarDealership(bodyObj.name,bodyObj.city,bodyObj.street,bodyObj.isOpen);
    try{
        return await insertCarDealership(dealership);
    }
    catch (e){
        throw new InternalServerError();
    }
}

module.exports = postCarDealership;