const axios = require('axios');
require('dotenv').config()
const PEXELS_API_KEY = process.env.PEXELS_API_KEY;
const getPexelsImage = async (query) => {
    const URL = `https://api.pexels.com/v1/search?query=${query}&per_page=1`;
    try {
        const response = await axios.get(URL, {
            headers: {
                Authorization: PEXELS_API_KEY,
            },
        });
        return response.data.photos[0].src.tiny;
    } catch (error) {
        console.error(error);
    }
};

module.exports = getPexelsImage;