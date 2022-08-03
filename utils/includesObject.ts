// type inputConfiguration = {
//     sourceArray : any[];
//     checkingObject : any;
//     key : string;
// }

function includesObject<T>(sourceArray: T[] , searchObject: T, key: keyof T): boolean {
    let isPresent = false;

    let result = sourceArray.filter((element) => {
        return element[key] == searchObject[key]
    })

    if(result.length >1)
    {
        throw new Error("Key is not unique");
        
    }
    if (result.length == 1) {
        isPresent = (JSON.stringify(result[0]) == JSON.stringify(searchObject))
    }
    return isPresent
}

export { includesObject };