function assignAllId() {
    var url = "https://abhijitturate.github.io/QuizApp/data/basicQuizData.json";
    fetch(url)
        .then(function (response) { return response.json(); })
        .then(function (data) {
        console.log("received data", data);
    });
}
assignAllId();
export {};
//# sourceMappingURL=assignAllId.js.map