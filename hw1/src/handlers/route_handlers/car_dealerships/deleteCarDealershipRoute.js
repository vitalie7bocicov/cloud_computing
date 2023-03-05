const InternalServerError = require("../../../exceptions/InternalServerError");
const deleteCarDealershipQuery = require("../../../repository/queries/delete_queries/deleteCarDealershipQuery")
async function deleteCarDealershipRoute(id){
    try{
        return await deleteCarDealershipQuery(id);
    }
    catch (error)
    {
        if(error.name==="404")
            throw(error);
        throw(new InternalServerError());
    }
}

module.exports = deleteCarDealershipRoute