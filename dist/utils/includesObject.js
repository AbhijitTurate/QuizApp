// type inputConfiguration = {
//     sourceArray : any[];
//     checkingObject : any;
//     key : string;
// }
function includesObject(sourceArray, searchObject, key) {
    var isPresent = false;
    var result = sourceArray.filter(function (element) {
        return element[key] == searchObject[key];
    });
    if (result.length > 1) {
        throw new Error("Key is not unique");
    }
    if (result.length == 1) {
        isPresent = (JSON.stringify(result[0]) == JSON.stringify(searchObject));
    }
    return isPresent;
}
export { includesObject };
//# sourceMappingURL=includesObject.js.map