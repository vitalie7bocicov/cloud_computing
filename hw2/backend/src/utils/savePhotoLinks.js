
const photoLinks = {};
function getPhotoLink(car){
    return photoLinks[car];
}

function savePhotoLink(car, link){
    photoLinks[car] = link;
}

module.exports = {savePhotoLink, getPhotoLink}