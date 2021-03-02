const logoutBtn = document.getElementById('logoutBtn');
const showQuizFormBtn = document.getElementById('showQuizFormBtn');
const NewQuizForm = document.getElementById('NewQuizForm');
const NewQuizContainer = document.getElementById('NewQuizContainer');
const saveNewQuizBtn = document.getElementById('saveNewQuizBtn');

window.onload = () => {
   var x = localStorage.getItem('loggedIn');
   x === "true"? "" : window.location.assign('../HTML/login.html');
};

logoutBtn.addEventListener('click', (e) =>{
    new LogIn().logoutBtnAdmin();
});

showQuizFormBtn.addEventListener('click', () =>{
    NewQuizContainer.classList.remove('hidden');
});

saveNewQuizBtn.addEventListener('click', () =>{
    form = document.forms.NewQuizForm;
    if (form.checkValidity())
    {
        new Quiz().createNewQuiz(form);
        NewQuizContainer.classList.add('hidden');
    }
    else
    {
        return;
    }   
});
