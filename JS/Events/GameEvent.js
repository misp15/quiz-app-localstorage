var Quizes = [];
var quizList = document.getElementById('quizList');
var choices = Array.from(document.getElementsByClassName('choice-text'));
var game = {}; 

window.onload = () => {
    Quizes = new Quiz().createQuizList('quizListRoot');
};
  
document.addEventListener('click', (e) =>{
    if (e.target.name != undefined)
    {
        var chosenQuiz = Quizes.filter(item => item.QuizId == e.target.name )[0];
        game = new Game();
        game.loadQuestions(chosenQuiz);
        quizList.classList.add('hidden');
    }
});

choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        game.answerButton(e);
    });
});
