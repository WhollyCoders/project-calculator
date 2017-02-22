console.log('Hello WhollyCoder!!!');
var initialValue = 0;
var maxCharacters = 10;
var numberButtonValue, firstVariable, secondVariable, currentOutputValue, currentOperation, outputValue, maxReached;
var numbers = [];
var outputArea = document.getElementById('output-area');
var clearButton = document.getElementById('btn-clear');
var oppositeButton = document.getElementById('btn-opposite');
var decimalButton = document.getElementById('btn-decimal');
var percentButton = document.getElementById('btn-percent');
var equalButton = document.getElementById('btn-equal');
var allNumberButtons = document.getElementsByClassName('btn-number');
var allOperationButtons = document.getElementsByClassName('btn-operation');

outputArea.innerHTML = initialValue;
clearButton.addEventListener('click', clearDisplayArea);
oppositeButton.addEventListener('click', displayOpposite);
decimalButton.addEventListener('click', displayDecimalValue);
percentButton.addEventListener('click', displayPercentValue);
equalButton.addEventListener('click', completeOperation);

for(var i = 0; i < allNumberButtons.length; i++){
    allNumberButtons[i].addEventListener('click', displayNumber);
}

for(var i = 0; i < allOperationButtons.length; i++){
    allOperationButtons[i].addEventListener('click', startOperation);
}
