function calculator(){
    var oneNumber = prompt('Please enter your first number: ', );
    var mathOpp = prompt('Choose one of the following: +, /, -, *', );
    var twoNumber = prompt('Enter a second number: ');
    var firstNumber = parseFloat(oneNumber);
    var secondNumber = parseFloat(twoNumber);
    var calculate = prompt('Calculate results?',  'Y/N');

    function calc(calculate){

    var result;
    
    if(calculate === 'Y' || 'y' || 'yes' || 'YES'){    	
	    if(mathOpp === '+'){
	        result = firstNumber + secondNumber;
	        console.log(result);
	    }
	    else if(mathOpp === '-'){
	        result = firstNumber - secondNumber;
	        console.log(result);
	    }
	    else if(mathOpp === '/'){
	        result = firstNumber / secondNumber;
	        console.log(result);
	    }
	    else if(mathOpp === '*'){
	        result = firstNumber * secondNumber;
	        console.log(result);
	    }
	    else{
	        console.log('error');
	    }

	}
	else if(calculate === 'N' || 'n' || 'no' || 'NO'){
		 if(mathOpp === '+'){
	        result = firstNumber + secondNumber;
	        console.log(result);
	    }
	    else if(mathOpp === '-'){
	        result = firstNumber - secondNumber;
	        console.log(result);
	    }
	    else if(mathOpp === '/'){
	        result = firstNumber / secondNumber;
	        console.log(result);
	    }
	    else if(mathOpp === '*'){
	        result = firstNumber * secondNumber;
	        console.log(result);
	    }
	    else{
	        console.log('error');
	    }
	}
}
calc();
}

calculator();


