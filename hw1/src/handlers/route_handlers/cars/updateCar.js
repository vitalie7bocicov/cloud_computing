const BadRequest = require('../../../exceptions/BadRequest')
const InternalServerError = require("../../../exceptions/InternalServerError");
const updateCarQuery = require("../../../repository/queries/update_queries/updateCarQuery");
const Car = require("../../../models/Car");
const isValidCarBody = require("../../../helpers/isValidCarBody");

async function updateCar(bodyObj, id){
    if(!isValidCarBody(bodyObj))
        throw new BadRequest();

    let car = new Car(bodyObj.brand,bodyObj.model,bodyObj.year,bodyObj.dealershipId);
    car.id = id;
    try{
        return await updateCarQuery(car);
    }
    catch (error){
        if(error.name === "404"){
            throw(error);
        }
        throw new InternalServerError();
    }
}

module.exports = updateCar;