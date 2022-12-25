import Jimp from 'jimp';

const extractSingleColor = async (imageURI) =>  {
    let colorArrays = [];
    await Jimp.read(imageURI)
        .then(image => {
            const { width, height } = image.bitmap;

            for(let i=0; i<width; i++) {
                for(let j=0; j<height; j++) {
                    colorArrays.push(image.getPixelColor(i, j));
                }
            }
        });
    let x = Math.floor((Math.random() * (colorArrays.length-1)) + 1);
    const hex = colorArrays[x];
    return Jimp.intToRGBA(hex);
}



export default extractSingleColor;