const quizeData = [
    {
        question: 'how old are you',
        a: '23',
        b: '34',
        c: '45',
        d: '50',
        currect:'c'
    },
    {
        question: 'what is color of your nose',
        a: 'black',
        b: 'red',
        c: 'pink',
        d: 'dark',
        currect:'c'
    }, 
    {
        question: 'what is your fav color',
        a: 'black',
        b: 'red',
        c: 'pink',
        d: 'dark',
        currect: 'a'
        
    },
    {
        question: 'what is color of your eye',
        a: 'black',
        b: 'red',
        c: 'pink',
        d: 'dark',
        currect:'a'
    },
    {
        question: 'what is color of your hair',
        a: 'black',
        b: 'red',
        c: 'pink',
        d: 'dark',
        currect:'a'
    }
]

const question = document.getElementById('question');

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const btn = document.getElementById('Submit');
const answerEls = document.querySelectorAll('.answer');
const quize = document.getElementById('quiz');



let current = 0;
let score = 0;
quizeLoad();

function quizeLoad() {
    deSelect();
     const currentData = quizeData[current];
    question.innerText = currentData.question;
    a_text.innerText = currentData.a;
    b_text.innerText = currentData.b;
    c_text.innerText = currentData.c;
    d_text.innerText = currentData.d;


    

};
function getSelected() {

    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}
function deSelect() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    })
}


btn.addEventListener('click', () => {
    const answer = getSelected();
    console.log(current);
    console.log(score);
    
    if (answer) {
        if (answer === quizeData[current].currect) {
            score++;

        };
    }
    
    current++;
    if (current < quizeData.length  ) {
       quizeLoad();
     } else {
        quize.innerHTML = `<h3>you have score at ${score}/${quizeData.length}</h3>`;
    }

 
});