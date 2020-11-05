function calculator(){
    var oneNumber = prompt('Please enter your first number: ', 1);
    var mathOpp = prompt('Choose one of the following: +, /, -, *', null)
    var twoNumber = prompt('Enter a second number: ');
    var firstNumber = parseInt(oneNumber);
    var secondNumber = parseInt(twoNumber);


    if(mathOpp === '+'){
        let sum = firstNumber + secondNumber;
        console.log(sum);
    }
    else if(mathOpp === '-'){
        let minus = firstNumber - secondNumber;
        console.log(minus);
    }
    else if(mathOpp === '/'){
        let division = firstNumber / secondNumber;
        console.log(division)
    }
    else if(mathOpp === '*'){
        let multiply = firstNumber * secondNumber;
        console.log(multiply);
    }
    else{
        console.log('error');
    }

}

calculator();