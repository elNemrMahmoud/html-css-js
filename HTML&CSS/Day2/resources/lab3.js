function readNumber(promptText){
    var input = prompt(promptText);
    var number = parseFloat(input);
    if(isNaN(number)){
        alert("Error: Blease enter a valid number");
        //Recursive call !!!
        return readNumber(promptText);
    }
    return number;
}

var firstNumber = readNumber("Enter the first Number");
var secondNumber = readNumber("Enter the second Number");
var thirdNumber = readNumber("Enter the Third Number");



var maxNumber = Math.max(firstNumber, secondNumber, thirdNumber);
var minNumber = Math.min(firstNumber, secondNumber, thirdNumber);

document.writeln("First number:"+firstNumber+"<br>");
document.writeln("Second number:"+secondNumber+"<br>");
document.writeln("Third number:"+thirdNumber+"<br>");
document.writeln("Maximum number:"+maxNumber+"<br>");
document.writeln("Minimum number:"+minNumber);