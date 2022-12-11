import axios from 'axios';

async function extractSingleColor(imageURI) {
    const response = await axios.post('https://image-color-extractor-server-production.up.railway.app/api/getsinglecolor', {
        imageURI: imageURI 
    });
    return response.data;
}


export default extractSingleColor;