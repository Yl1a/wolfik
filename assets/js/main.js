const inputOne = document.querySelector('.inputOne');
const inputSec = document.querySelector('.inputSec');
const btnPlus = document.querySelector('.plus');
const btnMinus = document.querySelector('.minus');
const btnMulti = document.querySelector('.Multi');
const btnDivision = document.querySelector('.Division');
const btnResult = document.querySelector('.btnResult');
const resultEl = document.querySelector('.result');


let action = '+'

btnPlus.onclick = function(){
    action = '+'
}

btnMinus.onclick = function(){
    action = '-'
}
btnMulti.onclick = function(){
    action = '*'
}
btnDivision.onclick = function(){
    action = '/'
}


function printResult(result){
    if(result < 0) {
        resultEl.style.color = 'red'
    } else {
        resultEl.style.color = '#115739'
        resultEl.textContent = result;

    }
}

btnResult.onclick = function () {
    if(action === '+'){
        const sum = Number(inputOne.value) + Number(inputSec.value);
        resultEl.textContent = sum;
        printResult(sum);
    } else if(action === '-'){
        const sum = Number(inputOne.value) - Number(inputSec.value);
        resultEl.textContent = sum;
        printResult(sum);

    }else if(action === '*'){
        const sum = Number(inputOne.value) * Number(inputSec.value);
        resultEl.textContent = sum;
        printResult(sum);

    }else{
        const sum = Number(inputOne.value) / Number(inputSec.value);
        resultEl.textContent = sum;
        printResult(sum);

    }
}


