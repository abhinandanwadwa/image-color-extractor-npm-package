async function extractSingleColor(imageURI) {
    const axios = require('axios').default;
    const response = await axios.post('https://image-color-extractor-server-production.up.railway.app/api/getsinglecolor', {
        imageURI: imageURI 
    });
    return response.data;
}


module.exports = extractSingleColor;