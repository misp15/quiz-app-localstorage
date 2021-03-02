window.onload = () => {
  var oldQuizes = JSON.parse(localStorage.getItem('AllQuizes')) || [];
  if(oldQuizes.length === 0)
  {
    let quizQuestion1 = new Question("Withch flower is the best?", "roses", "pion", "tulips", "lillies");
    let quizQuestion2 = new Question("Withch flower is the best?", "roses", "pion", "tulips", "lillies");
    let quizQuestion3 = new Question("Withch flower is the best?", "roses", "pion", "tulips", "lillies");
    var questions = [quizQuestion1, quizQuestion2, quizQuestion3];

    let newQuiz = new Quiz("QuizOne", questions);
    oldQuizes.push(newQuiz);
    localStorage.setItem("AllQuizes", JSON.stringify(oldQuizes));
  }
};


    








