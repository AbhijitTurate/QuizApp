import { generateUniqueId } from "../../utils/generateUniqueId.js";
var ResultModal = /** @class */ (function () {
    function ResultModal(resultScore) {
        this.id = generateUniqueId({ prefix: "modal" });
        this.resultScore = resultScore;
        console.log("result Score:", this.resultScore);
        this.mount();
    }
    ResultModal.prototype.render = function () { };
    ResultModal.prototype.mount = function () { };
    return ResultModal;
}());
export default ResultModal;
//# sourceMappingURL=ResultModal.js.map