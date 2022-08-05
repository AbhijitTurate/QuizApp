import { generateUniqueId } from "../../utils/generateUniqueId.js";

class ResultModal {
    id: string;
    resultScore : number;
    constructor(resultScore : number) {
        this.id = generateUniqueId({prefix : "modal"});
        this.resultScore = resultScore;
        console.log("result Score:",this.resultScore);
        this.mount();
    }
    render(){}
    mount(){}
}


export default ResultModal;