function isValidCarBody(bodyObj){
    if(Object.keys(bodyObj).length!==4)
        return false;
    if(!bodyObj.hasOwnProperty('brand') ||!bodyObj.hasOwnProperty('model')
        || !bodyObj.hasOwnProperty('year') || !bodyObj.hasOwnProperty('dealershipId'))
        return false;
    return true;
}

module.exports = isValidCarBody
