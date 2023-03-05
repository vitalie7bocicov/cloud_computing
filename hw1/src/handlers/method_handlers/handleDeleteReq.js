const url = require("url");
const handleDeleteCarDealershipRoute = require("../route_handlers/car_dealerships/deleteCarDealershipRoute");
const handleDeleteCarRoute = require("../route_handlers/cars/deleteCarRoute");
const BadRequest = require("../../exceptions/BadRequest");
const isNumeric = require("../../helpers/isNumeric");
async function handleDeleteReq(req, res) {
    const { pathname } = url.parse(req.url)
    const path = pathname.slice(1).split("/");
    res.setHeader('Content-Type', 'application/json;charset=utf-8');
    if(path.length!==2)
        throw(new BadRequest());
    if(!isNumeric(path[1]))
        throw(new BadRequest());
    switch (path[0]) {
        case "car_dealerships":
            try {
                const response = await handleDeleteCarDealershipRoute(parseInt(path[1]));
                return res.end(JSON.stringify(response))
            }
            catch(error){
                console.log(error);
                throw(error);
            }
        case "cars":
            try {
                const response = await handleDeleteCarRoute(parseInt(path[1]));
                return res.end(JSON.stringify(response))
            }
            catch(error){
                console.log(error);
                throw(error);
            }
        default:
            throw new BadRequest();
    }
}

module.exports = handleDeleteReq