const url = require("url");
const NotFound = require("../../exceptions/NotFound");
const isNumeric = require("../../helpers/isNumeric");
const BadRequest = require("../../exceptions/BadRequest");
const getBodyParams = require("../../helpers/getBodyParams");
const patchCarDealership = require("../route_handlers/car_dealerships/patchCarDealership");
const patchCar = require("../route_handlers/cars/patchCar");

async function handlePatchReq (req, res){
    const {pathname} = url.parse(req.url);
    const path = pathname.trim().slice(1).split("/");
    res.statusCode = 204;
    if (path.length !== 2)
        throw new NotFound();
    if(!isNumeric(path[1]))
        throw(new BadRequest());
    switch (path[0]) {
        case "car_dealerships":{
            try {
                let bodyObj = await getBodyParams(req);
                const response = await patchCarDealership(bodyObj, parseInt(path[1]))
                return res.end(JSON.stringify(response));
            }
            catch (error){
                throw (error);
            }
        }
        case "cars":{
            try {
                let bodyObj = await getBodyParams(req);
                const response = await patchCar(bodyObj, parseInt(path[1]));
                return res.end(JSON.stringify(response));
            }
            catch (error){
                throw (error);
            }
        }
        default:
            throw new NotFound();
    }
}

module.exports = handlePatchReq