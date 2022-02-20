const quizData = [{
    question: 'Most Successful Club in Champions League?',
    a: 'Bayern Munich',
    b: 'Manchester United',
    c: 'Real Madrid',
    d: 'AC Milan',
    answer: 'c'
},{
    question: "Which of these clubs didn't win the UCL?",
    a: 'Porto',
    b: 'Manchester City',
    c: 'Real Madrid',
    d: 'Barcelona',
    answer: 'b'
},{
    question: 'How many times did Juventus win the UCL?',
    a: '1',
    b: '2',
    c: '3',
    d: '4',
    answer: 'b'
},{
    question: 'Who scored the most goals in the UCL?',
    a: 'Messi',
    b: 'Rooney',
    c: 'Neymar',
    d: 'Ronaldo',
    answer: 'd'
},{
    question: 'Who did appear the most in the UCL?',
    a: 'Iker Casillas',
    b: 'Ronaldo',
    c: 'Ryan Giggs',
    d: 'Xavi',
    answer: 'a'
}
];

const quiz = document.querySelector('#quiz');
const question = document.querySelector('#question');
const aText = document.querySelector('#aText');
const bText = document.querySelector('#bText');
const cText = document.querySelector('#cText');
const dText = document.querySelector('#dText');
const answerEls = document.querySelectorAll('.answer')
const submitBtn = document.querySelector('.submit');

let currentQuiz = 0;
let score = 0;
currentQ();

function currentQ() {
deselectAnswer()
let currentQuestion = quizData[currentQuiz];
question.innerText = currentQuestion.question;
aText.innerText = currentQuestion.a;
bText.innerText = currentQuestion.b;
cText.innerText = currentQuestion.c;
dText.innerText = currentQuestion.d;
}

function correctAnswer(){
let answer = undefined;
answerEls.forEach((answerEl) => {
    if(answerEl.checked){
        answer = answerEl.id
    }
})
return answer;
}

function deselectAnswer(){
answerEls.forEach((answerEl) => {
    answerEl.checked = false;
})
}

submitBtn.addEventListener('click', () => {
const answer = correctAnswer()
if(answer){
    if(answer === quizData[currentQuiz].answer){
        score++
    }
    currentQuiz++
    if(currentQuiz < quizData.length){
        currentQ();
    } else {
        quiz.innerHTML = `<h2 id="question">Your scored ${score}/${quizData.length} questions.</h2>
        <button style="margin: 1rem 0;" class="submit" onclick="location.reload()">Replay</button>
        <a href="../index.html"><button class="submit">Home</button></a>`
    }
}
})