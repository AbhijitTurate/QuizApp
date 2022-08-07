import Option from "../src/components/Option.js";
import Question from "../src/components/Question.js";
import Quiz from "../src/components/Quiz.js";
import { generateUniqueId } from "./generateUniqueId.js";


function assignAllId(){
    let quizObject:Quiz
    let questions : Question[] =[];

    const url = "https://abhijitturate.github.io/QuizApp/data/basicQuizData.json"
    fetch(url)
    .then((response) =>response.json())
    .then((data) => {
        let quiz : Quiz = data;
        let quizQuestions : Question[] = data.questions;
        let quizOptions : Option[]=[] ;
        data.id = generateUniqueId({prefix :"quiz"})
        quizQuestions.forEach((question) => {
            let questionText = question.questionText;
            let points = question.points;
           
            let options =  generateOptions(question.options) ;
            // generateCorrectOptions(options);
            // console.log( options.filter(option => option.isCorrect));
            
            let correctOptions = options.filter(option => option.isCorrect);
            question.id = generateUniqueId({prefix : "ques"});
            question = Object.assign(new Question({questionText,points, correctOptions , options}),question)
            questions.push(question)
        })

        
        data.questions = [...questions]
        const quizTitle = data.quizTitle;
        const defaultPoints = data.defaultPoints;
        console.log("received data",data);
        quizObject = Object.assign(new Quiz({quizTitle,questions,defaultPoints}),data)

        console.log("Quiz object generated from Object.assign:",quizObject);
    }
    )

}

function generateOptions(options: Option[]):Array<Option>{
    let Options :Option [] =[];
    let recievedOptions : Option[] = options
    console.log("recieved options:",Options);
    recievedOptions.forEach(option => {
        let optionText = option.optionText;
        let isCorrect = option.isCorrect;
        option.id = generateUniqueId({prefix : "option"});
        let optionObject = Object.assign( new Option({optionText,isCorrect}) , option);
        Options.push(optionObject);
    });
    
    return Options ;
    // return []
}

assignAllId()

// const op1 = new Option({optionText: "2", isCorrect: true});
// const op2 = new Option({optionText: "4", isCorrect: false});
// const op3 = new Option({optionText: "3", isCorrect: false});
// const op4 = new Option({optionText: "5", isCorrect: false});

// const question1 = new Question({questionText : "what is 1+1 ?",points : 1 , correctOptions :[op1],options : [op1,op2,op3,op4]});

// const quiz2op1 = new Option({optionText: "Java Style", isCorrect: false});
// const quiz2op2 = new Option({optionText: "json script", isCorrect: false});
// const quiz2op3 = new Option({optionText: "javascript", isCorrect: true});
// const quiz2op4 = new Option({optionText: "javastorm", isCorrect: true});


// const question2 = new Question({questionText : "what is full form of JS ?",points : 2 , correctOptions :[quiz2op3,quiz2op4],options : [quiz2op1,quiz2op2,quiz2op3,quiz2op4]});
// const quiz1 = new Quiz({quizTitle:"quiz app",defaultPoints :10 , questions : [question1,question2]})

//  console.log("manually created quiz",quiz1);
 