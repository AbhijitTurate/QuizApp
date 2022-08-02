import { generateUniqueId } from "../../utils/generateUniqueId.js";
var Option = /** @class */ (function () {
    // constructor(optionText: string , isCorrect : boolean)
    function Option(_a) {
        var optionText = _a.optionText, isCorrect = _a.isCorrect;
        this.id = generateUniqueId({ prefix: "Option" });
        this.optionText = optionText;
        this.isCorrect = isCorrect;
    }
    return Option;
}());
export default Option;
