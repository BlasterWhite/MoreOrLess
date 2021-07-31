const input = document.getElementById('guess');
const inputR = document.getElementById('range');
const menu = document.getElementById('menu');
const historic = document.getElementById('historic');
const maxNumber = 100000;
var hint = document.getElementById('rep');
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
    while (historic.firstChild) {
        historic.removeChild(historic.firstChild);
    }
}

function more(num) {
    repetitionLess = 1;
    document.body.style.backgroundColor = "var(--more)";
    if(repetitionMore == 1) hint.innerText = 'MORE';
    else hint.innerText = `MORE x ${repetitionMore}`;
    repetitionMore++;
    input.value = null;
    historic.innerHTML += `<h5>More of ${num}</h5>`;
}

function less(num) {
    repetitionMore = 1;
    document.body.style.backgroundColor = "var(--less)";
    if(repetitionLess == 1) hint.innerText = 'LESS';
    else hint.innerText = `LESS x ${repetitionLess}`;
    repetitionLess++;
    input.value = null;
    historic.innerHTML += `<h5>Less of ${num}</h5>`;
}

function check() {
    guess = input.value;
    if(guess >= 1 && guess < maxNumber) {
        answers++;
        if(guess < number) more(guess);
        if(guess > number) less(guess);
        if(guess == number) {
            historic.innerHTML += `<h5>${guess} was the number to guess !</h5>`;
            document.body.style.backgroundColor = "#262626";
            hint.innerText = `You won in ${answers} answers !`;
            repetitionMore = 1;
            repetitionLess = 1;
            answers = 0;
            setTimeout(() => {
                menu.style.visibility = ('initial');
                hint.innerText = `Good Luck`;
                input.value = null;
            }, 2500);
        }
    }
}

document.addEventListener("keyup", function(event) {
    if (event.key === 'Enter') {
        if (input === document.activeElement) {
            check();
        }
    }
});