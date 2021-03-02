class Game{
    question = document.getElementById('question');
    choices = Array.from(document.getElementsByClassName('choice-text'));
    progressText = document.getElementById('progressText');
    scoreText = document.getElementById('score');
    progressBarFull = document.getElementById('progressBarFull');
    
    loader = document.getElementById('loader');
    game = document.getElementById('game');

    currentQuestion = {};
    acceptingAnswers = false;
    score = 0;
    questionCounter = 0;
    availableQuesions = [];

    questions = [];

    CORRECT_BONUS = 10;
    MAX_QUESTIONS = 3;

    constructor(questions){
        this.Questions = questions;
    }

    loadQuestions = (chosenQuiz) =>
    {
        this.questions = chosenQuiz.Questions.map((loadedQuestion) => {
            const formattedQuestion = {
                question: loadedQuestion.Question,
            };

            const answerChoices = [loadedQuestion.Answer1, loadedQuestion.Answer2, loadedQuestion.Answer3];
            formattedQuestion.answer = Math.floor(Math.random() * 4) + 1;
            answerChoices.splice(
                formattedQuestion.answer - 1,
                0,
                loadedQuestion.CorrectAnswer
            );

            answerChoices.forEach((choice, index) => {
                formattedQuestion['choice' + (index + 1)] = choice;
            });

           
            return formattedQuestion;
        });

        this.startGame();

    };

    startGame = () => {
        this.questionCounter = 0;
        this.score = 0;
        this.availableQuesions = [...this.questions];
        this.getNewQuestion();
        this.game.classList.remove('hidden');
        this.loader.classList.add('hidden');
    };

    getNewQuestion = () => {
        if (this.availableQuesions.length === 0 || this.questionCounter >= this.MAX_QUESTIONS) {
            localStorage.setItem('mostRecentScore', this.score);
            //go to the end page
            return window.location.assign('../HTML/end.html');
        }
        this.questionCounter++;
        this.progressText.innerText = `Question ${this.questionCounter}/${this.MAX_QUESTIONS}`;
        //Update the progress bar
        this.progressBarFull.style.width = `${(this.questionCounter / this.MAX_QUESTIONS) * 100}%`;
    
        const questionIndex = Math.floor(Math.random() * this.availableQuesions.length);
        this.currentQuestion = this.availableQuesions[questionIndex];
        this.question.innerHTML = this.currentQuestion.question;
    
        this.choices.forEach((choice) => {
            const number = choice.dataset['number'];
            choice.innerHTML = this.currentQuestion['choice' + number];
        });
    
        this.availableQuesions.splice(questionIndex, 1);
        this.acceptingAnswers = true;
    };

    answerButton = (e) =>
    {
        if (!this.acceptingAnswers) return;

        this.acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        const classToApply =
            selectedAnswer == this.currentQuestion.answer ? 'correct' : 'incorrect';

        if (classToApply === 'correct') {
            this.incrementScore(this.CORRECT_BONUS);
        };

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            this.getNewQuestion();
        }, 1000);
    };

    incrementScore = (num) => {
        this.score += num;
        this.scoreText.innerText = this.score;
    };

    saveHighScore = (e) => {
        e.preventDefault();
        const username = document.getElementById('username');
        const finalScore = document.getElementById('finalScore');
        const mostRecentScore = localStorage.getItem('mostRecentScore');

        const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

        const MAX_HIGH_SCORES = 30;

        finalScore.innerText = mostRecentScore + " av " + MAX_HIGH_SCORES;


        const score = {
            score: mostRecentScore,
            name: username.value,
        };
        highScores.push(score);
        highScores.sort((a, b) => b.score - a.score);
        highScores.splice(5);

        localStorage.setItem('highScores', JSON.stringify(highScores));
    };
}