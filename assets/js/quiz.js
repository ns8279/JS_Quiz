
// to populate questions
var populate = function () {
    if (quiz.endQuiz()) {
        showScores();
    }
    else {
        // show question
        var pEl = document.getElementById("question");
        pEl.innerHTML = quiz.getQuestionIndex().text;

        //show options

        var  options = quiz.getQuestionIndex().options;
        for (var i = 0 ; i< options.length; i++){
            var spanEl = document.getElementById("choice" + i);
            spanEl.innerHTML = options[i];
            guess("btn" + i, options[i]);
        }
        showProgress();

    }
}

//Function to show score
var showScores = function(){
    var quizOverHtml = "<h1>Result</h1>"
    quizOverHtml = "<h2 id = 'score'>Your Score: " + quiz.score + "</h2>";
    var quizEl = document.getElementById("quiz");
    quizEl.innerHTML = quizOverHtml;
}

var showProgress = function () {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var footerEl = document.getElementById("footer");
    footerEl.innerHTML = " Question " + currentQuestionNumber + " of " + quiz.questions.length;
}

var guess = function(id, guessTheAnswer){
    var button = document.getElementById(id);
    button.onclick = function(){
        quiz.guessTheAnswer(guessTheAnswer);
        populate()
    }

}

//questions array
var questions = [
    new Question (
         "Commonly used data types DO Not Include:",
         ["strings", "booleans", "alerts", "numbers"],
        "alerts"),
        
    new Question ("The condition in an if / else statement is enclosed with ________.",
    ["quotes", "curly brackets", "parenthesis", "square brackets"],
    "parenthesis"),
    
    new Question ( "Arrays in JavaScript can be used to store _______",
    ["numbers and strings", "other arrays", "booleans", "all of the above"],
    "all of the above"),

    new Question ( "String values must be enclosed within ________ when being assigned to variables.",
    ["commas", "curly brackets", "quotes", "parenthesis"],
    "3. quotes"),

    new Question ( "A very useful tool used during development and debugging for printing content to the debugger is:",
    [" JavaScript", "terminal/bash", "for loops", "console.log"],
    "console.log")

];

//creating an object for the score

var quiz = new Quiz(questions);

populate();


