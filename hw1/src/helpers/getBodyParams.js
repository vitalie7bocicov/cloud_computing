const getBodyParams = (req) => {
    return new Promise((resolve) => {
        let chunks = [];
        req.on("data", (chunk) => {
            chunks.push(chunk);
        });

        req.on("end", () => {
            const data = Buffer.concat(chunks);
            const dataString = data.toString();
            const parsedData = new URLSearchParams(dataString);
            const dataObj = {};
            for (let pair of parsedData.entries()) {
                dataObj[pair[0]] = pair[1];
            }
            resolve(dataObj);
        });
    });
};

module.exports = getBodyParams