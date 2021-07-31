const input = document.getElementById('guess');
const inputR = document.getElementById('range');
const menu = document.getElementById('menu');
var hint = document.getElementById('rep');
const maxNumber = 100000;
var number = 50;
var answers = 0;
var repetitionMore = 1;
var repetitionLess = 1;

function random(max) {
    number = Math.floor((Math.random() * max) + 1);
}

function start() {
    if(inputR.value > 1 && inputR.value < maxNumber){
        random(inputR.value);
    }else {
        random(100);
    }
    menu.style.visibility = ('hidden');
}

function more() {
    repetitionLess = 1;
    document.body.style.backgroundColor = "var(--more)";
    if(repetitionMore == 1) hint.innerText = 'MORE';
    else hint.innerText = `MORE x ${repetitionMore}`;
    repetitionMore++;
}

function less() {
    repetitionMore = 1;
    document.body.style.backgroundColor = "var(--less)";
    if(repetitionLess == 1) hint.innerText = 'LESS';
    else hint.innerText = `LESS x ${repetitionLess}`;
    repetitionLess++;
}

function check() {
    guess = input.value;
    answers++;
    if(guess < number) more();
    if(guess > number) less();
    if(guess == number) {
        document.body.style.backgroundColor = "#262626";
        hint.innerText = `You won in ${answers} answers !`;
        repetitionMore = 1;
        repetitionLess = 1;
        answers = 0;
        setTimeout(() => {
            menu.style.visibility = ('initial');
        }, 2500);
    }
}

document.addEventListener("keyup", function(event) {
    if (event.key === 'Enter') {
        if (input === document.activeElement) {
            check();
        }
    }
});