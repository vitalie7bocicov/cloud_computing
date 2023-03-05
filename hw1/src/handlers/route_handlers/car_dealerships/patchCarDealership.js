const BadRequest = require('../../../exceptions/BadRequest')
const patchCarDealershipQuery = require('../../../repository/queries/update_queries/patchCarDealershipQuery')
const InternalServerError = require("../../../exceptions/InternalServerError");
const NotFound = require("../../../exceptions/NotFound");
const existsDealership = require("../../../helpers/existsCarDealership");



async function patchCarDealership(bodyObj, id){
    if(!bodyObj.hasOwnProperty('isOpen'))
        throw(new BadRequest());
    let resourceExists = await existsDealership(id);
    if(!resourceExists)
        throw new NotFound();
    try{
        return await patchCarDealershipQuery(id, bodyObj.isOpen);
    }
    catch (e){
        throw new InternalServerError();
    }
}

module.exports = patchCarDealership;