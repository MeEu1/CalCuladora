const symbols = {
    numbers: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    ops: ['+', '-', '*', '/'],
    comma: ',',
    submit: '='
}

var output = '';
var toRestart = false;

const addText = (value) => {

    let calcText = document.getElementById('calc_text').value;

    if(!symbols.ops.includes(calcText[0]) || (symbols.ops.includes(calcText[0]) && calcText[0] == '-')) { //Checks if the first symbol isn't an operation or if it is a minus sign
        if(symbols.numbers.includes(value)) {
            if(symbols.numbers.includes(calcText[calcText.length - 1]) || calcText[calcText.length - 1] == ',') { //If it has a number or a comma before it
                output += value;
            }
            else if(calcText[calcText.length - 1] != ',') {
                output += ' ' + value;
            }
        }
        else if(symbols.ops.includes(value)) {
            if(calcText && !symbols.ops.includes(calcText[calcText.length - 1])) { //If the last symbol isn't an operation(unless is -)
                output += ' ' + value;
            }
            else if(!calcText && value == '-') {
                output += value;
            }
        }
        else if(value == symbols.comma) {
            if(!symbols.ops.includes(calcText[calcText.length - 1])) { //If the last symbol is a character
                output += value;
            }
        }
    }

    document.getElementById("calc_text").value += output;
    output = "";
    toRestart = false;
}

const parseText = (value) => {
    let calc = value.split(' ');
    let temp = 0;

    if(calc[0] == '')
        calc.shift();

    if(!isNaN(parseInt(calc[0]))) {
        temp = parseInt(calc[0]);
    }
    else {
        temp = 0;
    }

    for(let i = 0; i < calc.length - 1; i++) {
        if(calc[i]) {
            if(symbols.ops.includes(calc[i])) {
                switch(calc[i]) {
                    case '+':
                        if(parseInt(calc[i + 1]) != NaN)
                            temp += parseInt(calc[i + 1]);
                    break;
                    case '-':
                        if(parseInt(calc[i + 1]) != NaN)
                            temp -= parseInt(calc[i + 1]);
                    break;
                    case '/':
                        if(parseInt(calc[i + 1]) != NaN)
                            temp /= parseInt(calc[i + 1]);
                    break;
                    case '*':
                        if(parseInt(calc[i + 1]) != NaN)
                            temp *= parseInt(calc[i + 1]);
                    break;
                }
                // result = temp;
                continue;
            }
        }
    }

    toRestart = true;

    return temp;
}

btn_1.onclick = () => {
    if(toRestart == true)
        document.getElementById('calc_text').value = "";
    addText('1');
}
btn_2.onclick = () => {
    if(toRestart == true)
        document.getElementById('calc_text').value = "";
    addText('2');
}
btn_3.onclick = () => {
    if(toRestart == true)
        document.getElementById('calc_text').value = "";
    addText('3');
}
btn_4.onclick = () => {
    if(toRestart == true)
        document.getElementById('calc_text').value = "";
    addText('4');
}
btn_5.onclick = () => {
    if(toRestart == true)
        document.getElementById('calc_text').value = "";
    addText('5');
}
btn_6.onclick = () => {
    if(toRestart == true)
        document.getElementById('calc_text').value = "";
    addText('6');
}
btn_7.onclick = () => {
    if(toRestart == true)
        document.getElementById('calc_text').value = "";
    addText('7');
}
btn_8.onclick = () => {
    if(toRestart == true)
        document.getElementById('calc_text').value = "";
    addText('8');
}
btn_9.onclick = () => {
    if(toRestart == true)
        document.getElementById('calc_text').value = "";
    addText('9');
}
btn_0.onclick = () => {
    if(toRestart == true)
        document.getElementById('calc_text').value = "";
    addText('0');
}
btn_comma.onclick = () => {
    addText(',');
}
btn_add.onclick = () => {
    addText('+');
}
btn_sub.onclick = () => {
    addText('-');
}
btn_mult.onclick = () => {
    addText('*');
}
btn_div.onclick = () => {
    addText('/');
}
btn_clear.onclick = () => {
    document.getElementById("calc_text").value = "";
}
btn_submit.onclick = () => {
    document.getElementById("calc_text").value = parseText(document.getElementById("calc_text").value);
}