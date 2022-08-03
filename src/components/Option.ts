import { generateUniqueId } from "../../utils/generateUniqueId.js";
import Question from "./Question.js";

type OptionConfig ={
    optionText : string;
    isCorrect : boolean ;
    // parentQues/tion : Question;
}
class Option {
    id: string;
    optionText: string;
    isCorrect: boolean;
    // constructor(optionText: string , isCorrect : boolean)
    constructor({optionText,isCorrect} : OptionConfig)
     {
        this.id = generateUniqueId({ prefix: "Option" });
        this.optionText = optionText;
        this.isCorrect = isCorrect;
    }
}
export default Option