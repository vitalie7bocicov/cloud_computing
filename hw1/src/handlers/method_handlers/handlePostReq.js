const url = require( "url");
const NotFound = require( "../../exceptions/NotFound");
const getBodyParams = require( "../../helpers/getBodyParams");
const postCarDealership = require( "../route_handlers/car_dealerships/postCarDealership");
const postCar = require( "../route_handlers/cars/postCar");

async function handlePostReq(req, res){
    const {pathname} = url.parse(req.url);
    const path = pathname.trim().slice(1).split("/");
    res.statusCode = 201;
    if (path.length !== 1)
        throw new NotFound();
    switch (path[0]) {
        case "car_dealerships":{
            try {
                let bodyObj = await getBodyParams(req);
                const response = await postCarDealership(bodyObj)
                return res.end(JSON.stringify(response));
            }
            catch (error){
                console.log(error);
                throw (error);
            }
        }
        case "cars":{
            try {
                let bodyObj = await getBodyParams(req);
                const response = await postCar(bodyObj)
                return res.end(JSON.stringify(response));
            }
            catch (error){
                console.log(error);
                throw (error);
            }
        }
        default:
            throw new NotFound();
    }
}

module.exports = handlePostReq