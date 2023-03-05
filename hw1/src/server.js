const http = require('http')
const port = 5000;
const handleError = require('./handlers/errors/errorHandler')
const handleGetReq = require("./handlers/method_handlers/handleGetReq")
const handlePostReq = require("./handlers/method_handlers/handlePostReq")
const handleDeleteReq = require("./handlers/method_handlers/handleDeleteReq")
const handlePatchReq = require("./handlers/method_handlers/handlePatchReq")
const handlePutReq = require("./handlers/method_handlers/handlePutReq")

const server = http.createServer(async (req, res) => {
    try {
        switch (req.method) {
            case 'GET':
                return await handleGetReq(req, res);
            case 'POST':
                return await handlePostReq(req, res);
            case 'DELETE':
                return await handleDeleteReq(req, res);
            case 'PUT':
                return await handlePutReq(req, res);
            case 'PATCH':
                return await handlePatchReq(req, res);
        }
    }
    catch (e){
        console.log(e);
        return handleError(res,e.name);
    }
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`)
});