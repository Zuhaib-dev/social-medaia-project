const ImageKit = require("imagekit");

const  imagekit = new ImageKit({
    publicKey : process.env.PUBLIC_KEY,
    privateKey : process.env.PRIVATE_KEY,
    urlEndpoint : process.env.URL_ENDPOINT
});
async function uploadFile(file,filename) {
    const response = await imagekit.upload({
        file: file,
        fileName: filename
    })
    
    return response
}
module.exports = uploadFile