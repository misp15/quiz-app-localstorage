class Quiz{

    constructor(quizName, questions)
    {
        this.QuizName = quizName;
        this.QuizId = this.newGuid();
        this.Questions = questions;
        
    }

    createNewQuiz = (form) =>
    {       
      var questions = [];
      for(var i = 1; i <= 3; i++)
      {
          var quizQuestion = new Question();

          quizQuestion.Question = form.elements['question'+i].value;
          for(var j = 1; j <= 4; j++)
          {
              var answer = form.elements['answer'+i+j].value;
              j == 4? quizQuestion.CorrectAnswer = answer: quizQuestion['Answer'+j] = answer;
          }
          questions.push(quizQuestion);
      }
      var newQuiz = new Quiz(form.elements.quizName.value, questions);
      var oldQuizes = JSON.parse(localStorage.getItem('AllQuizes')) || [];
      oldQuizes.push(newQuiz);
      localStorage.setItem("AllQuizes", JSON.stringify(oldQuizes));

      return oldQuizes;
    }

    newGuid = () =>
    {
      var sGuid="";
      for (var i=0; i<32; i++)
       {
         sGuid+=Math.floor(Math.random()*0xF).toString(0xF);
       }
      return sGuid;
    }

    createQuizList = (divIdToAppendTo) =>
    {
      var Quizes = JSON.parse(localStorage.getItem('AllQuizes')) || [];
      Quizes.forEach(element => {
        var inputElement = document.createElement("input");
        inputElement.setAttribute('type', 'button');
        inputElement.setAttribute('name', element.QuizId);
        inputElement.setAttribute('value', element.QuizName);
        inputElement.setAttribute('class', 'btn');
        document.getElementById(divIdToAppendTo).appendChild(inputElement);
      });

      return Quizes;
    }
}