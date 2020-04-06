function Quiz(questions){
    this.score =0;
    this.questions = questions;
    this.questionIndex = 0;
}

//Getting the index of the current question
Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

//if the quiz has ended
Quiz.prototype.endQuiz = function(){
    return this.questions.length === this.questionIndex;
}

//function to check if an answer is correct or incorrect
Quiz.prototype.guessTheAnswer = function(answer) {
   
    if(this.getQuestionIndex().correctAnswer(answer)){
        this.score++;
    }
    this.questionIndex++;
}