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






var questions = [
    new Question (
         "Commonly used data types DO Not Include:",
         ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        "alerts"),
        
    new Question ("The condition in an if / else statement is enclosed with ________.",
    ["1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets"],
    "3. parenthesis"),
    
    new Question ( "Arrays in JavaScript can be used to store _______",
    ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
    "4. all of the above"),

    new Question ( "String values must be enclosed within ________ when being assigned to variables.",
    ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"],
    "3. quotes"),

    new Question ( "A very useful tool used during development and debugging for printing content to the debugger is:",
    ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console.log"],
    "4. console.log")

];

//creating an object for the score

var quiz = new Quiz(questions);

populate();


