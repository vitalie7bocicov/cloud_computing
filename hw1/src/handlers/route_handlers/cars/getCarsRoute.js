const getCars = require("./get/getCars");
const isNumeric = require("../../../helpers/isNumeric");
const getCarById = require("./get/getCarById");
const BadRequest = require("../../../exceptions/BadRequest");
const NotFound = require("../../../exceptions/NotFound");

async function handleGetCarsRoute(path, queryParams) {
    switch (path.length) {
        case 1: {
            try{
                return await getCars(queryParams);
            }
            catch (error){
                throw (error);
            }
        }
        case 2: {
            if (isNumeric(path[1])) {
                try{
                    return await getCarById(parseInt(path[1]));
                }
                catch (error){
                    throw(error);
                }
            }
            throw new BadRequest();
        }
        default:
            throw new NotFound();
    }
}

module.exports = handleGetCarsRoute