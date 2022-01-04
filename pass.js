const lengthEl = document.getElementById("length"); 
const upperEL  = document.getElementById("upper");
const lowerEL  = document.getElementById("lower");
const numberEL = document.getElementById("number"); 
const symbolEL = document.getElementById("symbol"); 
const passID = document.getElementById('pass-id');
const generateEl = document.querySelector('.btn-generate');

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = '0123456789';
const symbols = '~!@#$%^&*()/.,';

function getLowerCase(){
    return lowerLetters[Math.floor(Math.random()*lowerLetters.length)];
}

function getUpperCase(){
    return upperLetters[Math.floor(Math.random()*upperLetters.length)];
}

function getNumbers(){
    return numbers[Math.floor(Math.random()*numbers.length)];
}

function getSymbols(){
    return symbols[Math.floor(Math.random()*symbols.length)];
}

function generatePassWord(){

const len = lengthEl.value;

let passWord = '';

for(let i=passWord.length; i<len; i++){
    const pass = showPassword();
    passWord += pass;
}

passID.innerText = passWord;
}

function showPassword(){
    let xs=[];

    if(upperEL.checked) {
        xs.push(getUpperCase());
    }

    if(lowerEL.checked){
        xs.push(getLowerCase());
    }

    if(numberEL.checked){
        xs.push(getNumbers());
    }

    if(symbolEL.checked){
        xs.push(getSymbols());
    }

    return xs[Math.floor(Math.random()*xs.length)];
}


generateEl.addEventListener('click',generatePassWord);
