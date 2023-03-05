const BadRequest = require('../../../exceptions/BadRequest')
const updateCarDealershipQuery = require('../../../repository/queries/update_queries/updateCarDealershipQuery')
const InternalServerError = require("../../../exceptions/InternalServerError");
const CarDealership = require("../../../models/CarDealership");
const NotFound = require("../../../exceptions/NotFound");
const isValidCarDealershipBody = require("../../../helpers/isValidCarDealershipBody");
const existsDealership = require("../../../helpers/existsCarDealership");

async function updateCarDealership(bodyObj, id){
    if(!isValidCarDealershipBody(bodyObj))
        throw new BadRequest();
    let resourceExists = await existsDealership(id);

    if(!resourceExists)
        throw new NotFound();
    let dealership = new CarDealership(bodyObj.name,bodyObj.city,bodyObj.street,bodyObj.isOpen);
    dealership.id = id;
    try{
        return await updateCarDealershipQuery(dealership);
    }
    catch (e){
        throw new InternalServerError();
    }
}

module.exports = updateCarDealership;