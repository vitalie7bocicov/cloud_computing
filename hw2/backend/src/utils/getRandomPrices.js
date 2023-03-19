const axios = require("axios");
require('dotenv').config()
const RANDOM_API_KEY = process.env.RANDOM_API_KEY;

const getRandomPrices = async (nrPrices) => {
    const min = 30000;
    const max = 150000;
    const url = `https://api.random.org/json-rpc/2/invoke`;
    try {
        const response = await axios.post(url, {
            jsonrpc: '2.0',
            method: 'generateIntegers',
            params: {
                apiKey: RANDOM_API_KEY,
                n: nrPrices,
                min: min,
                max: max,
                replacement: true
            },
            id: 42
        });

        return response.data.result.random.data;
    }
    catch (error){
        console.log(error);
    }
}

module.exports = getRandomPrices