const url = require('url')
const NotFound = require("../../exceptions/NotFound")
const handleGetCarDealershipsRoute = require("../route_handlers/car_dealerships/get/getCarDealershipsRoute");
const handleGetCarsRoute = require("../route_handlers/cars/getCarsRoute");

async function handleGetReq(req, res) {
    const { pathname, query } = url.parse(req.url)
    const path = pathname.slice(1).split("/");
    let queryParams=null;
    if(query!=null)
        queryParams = query.split("&");

    res.setHeader('Content-Type', 'application/json;charset=utf-8');
    switch (path[0]) {
        case "car_dealerships":
            try {
                const response = await handleGetCarDealershipsRoute(path, queryParams);
                return res.end(JSON.stringify(response));
            }
            catch(error){
                console.log(error);
                throw(error);
            }
        case "cars":
            try {
                const response = await handleGetCarsRoute(path, queryParams);
                return res.end(JSON.stringify(response))
            }
            catch(error){
                console.log(error);
                throw(error);
            }
        default:
            throw new NotFound();
    }
}

module.exports = handleGetReq