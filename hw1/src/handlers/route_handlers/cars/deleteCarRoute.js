const InternalServerError = require("../../../exceptions/InternalServerError");
const deleteCarQuery = require("../../../repository/queries/delete_queries/deleteCarQuery")
async function deleteCarRoute(id){
    try{
        return await deleteCarQuery(id);
    }
    catch (error)
    {
        if(error.name==="404")
            throw(error);
        throw(new InternalServerError());
    }
}
module.exports = deleteCarRoute