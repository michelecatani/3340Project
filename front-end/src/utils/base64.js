function convertToImage(str) {
    var imageString = String(str).toString('base64');
    return imageString;
}

export default convertToImage;