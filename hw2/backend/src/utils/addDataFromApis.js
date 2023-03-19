const getRandomPrices = require("./getRandomPrices");
const getPexelsPhoto = require("./getPexelsPhoto");
const {savePhotoLink, getPhotoLink} = require("./savePhotoLinks");

async function addDataFromApis(cars){
    const prices = await getRandomPrices(cars.length);
    let car, photo;
    for(let i=0;i<cars.length;i++){
        car = cars[i].brand + "%20" + cars[i].model;
        photo = getPhotoLink(car);
        if(!photo){
            photo =  await getPexelsPhoto(car);
            savePhotoLink(car, photo)
        }
        cars[i]['price'] = prices[i];
        cars[i]['photo'] = photo
    }
    return cars;
}

module.exports = addDataFromApis;