import { generateUniqueId } from "./generateUniqueId";

function assignAllId(){
    const url = "https://abhijitturate.github.io/QuizApp/data/basicQuizData.json"
    fetch(url)
    .then((response) =>response.json())
    .then((data) => {
        console.log("received data",data);
        
    })
}

assignAllId()