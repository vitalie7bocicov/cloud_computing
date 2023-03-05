const url = require("url");
const NotFound = require("../../exceptions/NotFound");
const getBodyParams = require("../../helpers/getBodyParams");
const isNumeric = require("../../helpers/isNumeric");
const BadRequest = require("../../exceptions/BadRequest");
const updateCarDealership = require("../route_handlers/car_dealerships/updateCarDealership");
const updateCar = require("../route_handlers/cars/updateCar");

async function handlePutReq(req, res) {
    const {pathname} = url.parse(req.url);
    const path = pathname.trim().slice(1).split("/");
    if (path.length !== 2)
        throw new NotFound();
    if(!isNumeric(path[1]))
        throw(new BadRequest());
    switch (path[0]) {
        case "car_dealerships":{
            try {
                let bodyObj = await getBodyParams(req);
                const response = await updateCarDealership(bodyObj, parseInt(path[1]))
                return res.end(JSON.stringify(response));
            }
            catch (error){
                throw (error);
            }
        }
        case "cars":{
            try {
                let bodyObj = await getBodyParams(req);
                const response = await updateCar(bodyObj, parseInt(path[1]));
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

module.exports = handlePutReq