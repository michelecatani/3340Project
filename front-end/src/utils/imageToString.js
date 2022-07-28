function imageToString(element) {
    let file = element.files[0];
    let reader = new FileReader();
    reader.onloadend = function() {
        element.fileName = reader.result;
    }
    reader.readAsDataURL(file);
}

export default imageToString;