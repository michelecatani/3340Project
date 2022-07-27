function convertToImage(str) {
    var image = str.toString('base64');
    return 'data:image/png;base64,' + image;
}

export default convertToImage;