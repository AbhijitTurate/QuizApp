import Option from "./components/Option.js";
import Question from "./components/Question.js";
import Quiz from "./components/Quiz.js"

const op1 = new Option({optionText: "2", isCorrect: true});
const op2 = new Option({optionText: "4", isCorrect: false});
const op3 = new Option({optionText: "3", isCorrect: false});
const op4 = new Option({optionText: "5", isCorrect: false});

const question1 = new Question({questionText : "what is 1+1 ?",points : 1 , correctOptions :[op1],options : [op1,op2,op3,op4]});

const quiz2op1 = new Option({optionText: "Java Style", isCorrect: false});
const quiz2op2 = new Option({optionText: "json script", isCorrect: false});
const quiz2op3 = new Option({optionText: "javascript", isCorrect: true});
const quiz2op4 = new Option({optionText: "javastorm", isCorrect: true});


const question2 = new Question({questionText : "what is full form of JS ?",points : 2 , correctOptions :[quiz2op3,quiz2op4],options : [quiz2op1,quiz2op2,quiz2op3,quiz2op4]});
const quiz1 = new Quiz({quizTitle:"quiz app",defaultPoints :10 , questions : [question1,question2]})

console.log("Quiz Structure:",JSON.stringify(quiz1));



const rootDiv = document.getElementById("root")!

const num1=[10,20,30]
const num2 =[30,20,10]

// num1.forEach((number)=>{
//     num2.forEach((num2)=>{
       
//         console.log(num2);
        
//         if(num2===number){
//             console.log("element found");
            
//         }
  
//     })
// })
quiz1.mount(rootDiv)


