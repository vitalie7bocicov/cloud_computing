const {getCarDealerships} = require("./getCarDealerships");
const getCarsByDealershipId = require("../../cars/get/getCarsByDealershipId")
const isNumeric = require("../../../../helpers/isNumeric");
const getCarDealershipById = require("./getCarDealershipById");
const BadRequest = require("../../../../exceptions/BadRequest");
const NotFound = require("../../../../exceptions/NotFound");

async function handleGetCarDealershipsRoute(path, queryParams) {
    switch (path.length) {
        case 1: {
            try{
                return await getCarDealerships(queryParams);
            }
            catch (error){
                throw (error);
            }
        }
        case 2: {
            if (isNumeric(path[1])) {
                try{
                    return await getCarDealershipById(parseInt(path[1]));
                }
                catch (error){
                    throw(error);
                }
            }
            throw new BadRequest();
        }
        case 3: {
            if (path[2] === "cars") {
                try{
                    return await getCarsByDealershipId(parseInt(path[1]));
                }
                catch (error){
                    throw(error);
                }
            }
            throw new NotFound();
        }
        default:
            throw new NotFound();
    }
}

module.exports = handleGetCarDealershipsRoute