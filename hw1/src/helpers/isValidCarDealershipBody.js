function isValidCarDealershipBody(bodyObj){
    if(Object.keys(bodyObj).length!==4)
        return false;
    if(!bodyObj.hasOwnProperty('name') ||!bodyObj.hasOwnProperty('city')
        || !bodyObj.hasOwnProperty('street') || !bodyObj.hasOwnProperty('isOpen'))
        return false;
    return true;
}

module.exports = isValidCarDealershipBody