const quizData = [{
    question: 'Most Successful Club in English Football?',
    a: 'Arsenal',
    b: 'Manchester United',
    c: 'Liverpool',
    d: 'Chelsea',
    answer: 'b'
},{
    question: 'Which club has recorded the most defeats in Premier League history?',
    a: 'Everton',
    b: 'Aston Villa',
    c: 'Leads United',
    d: 'Newcastle',
    answer: 'a'
},{
    question: 'Who has won the most Premier League?',
    a: 'Arsenal',
    b: 'Liverpool',
    c: 'Manchester United',
    d: 'Chelsea',
    answer: 'c'
},{
    question: 'What was unique about the 2020-21 season?',
    a: 'There were more goals scored than any other season',
    b: 'There were fewer penalties awarded than in any other season',
    c: 'It is the only season in which there were more away wins than home wins',
    d: 'There were no English managers in the top flight for the first time',
    answer: 'c'
},{
    question: 'Only manager to win Treble with an english team?',
    a: 'Sir Alex Ferguson',
    b: 'Arsene Wenger',
    c: 'Mourinho',
    d: 'Pep Guardiola',
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