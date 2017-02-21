console.log('Hello WhollyCoder!!!');
var initialValue = 0;
var firstVariable, secondVariable;
var numbers = [];
var outputArea = document.getElementById('output-area');
var currentOutputValue;
var clearButton = document.getElementById('btn-clear');
var oppositeButton = document.getElementById('btn-opposite');
var decimalButton = document.getElementById('btn-decimal');
var percentButton = document.getElementById('btn-percent');
var allNumberButtons = document.getElementsByClassName('btn-number');
var allOperationButtons = document.getElementsByClassName('btn-operation');
var numberButtonValue = 0;

clearButton.addEventListener('click', clearDisplayArea);
oppositeButton.addEventListener('click', displayOpposite);
decimalButton.addEventListener('click', displayDecimalValue);
percentButton.addEventListener('click', displayPercentValue);

for(var i = 0; i < allNumberButtons.length; i++){
    allNumberButtons[i].addEventListener('click', displayNumber);
}

for(var i = 0; i < allOperationButtons.length; i++){
    allOperationButtons[i].addEventListener('click', startOperation);
}

function displayNumber(e){
    numberButtonValue = e.target.innerHTML;
    currentOutputValue = outputArea.innerHTML;
  if(currentOutputValue == "0"){
    outputArea.innerHTML = numberButtonValue;
  }else{
    outputArea.innerHTML += numberButtonValue;
  }
}

function displayOpposite(){
  currentOutputValue = getCurrentOutputValue();
  outputArea.innerHTML = currentOutputValue * -1;
}

function getCurrentOutputValue(){
  currentOutputValue = parseFloat(outputArea.innerHTML);
  return currentOutputValue;
}

function displayDecimalValue(){
  currentOutputValue = outputArea.innerHTML;
  var includesDecimal = currentOutputValue.includes(".");
  if(!includesDecimal){
    outputArea.innerHTML += ".";
  }
}

function displayPercentValue(){
  currentOutputValue = getCurrentOutputValue();
  currentOutputValue = parseFloat(currentOutputValue);
  outputArea.innerHTML = currentOutputValue/100;
}

function clearDisplayArea(){
  outputArea.innerHTML = initialValue;
}

function startOperation(){
  storeFirstVariable();
  console.log('Operation started...');
}

function storeFirstVariable(){
  currentOutputValue = getCurrentOutputValue();
  firstVariable = currentOutputValue;
  numbers.push(firstVariable);
}

function checkForZeroInDisplay(){
  if(currentOutputValue == initialValue){
    return true;
  }else{
    return false;
  }
}

function isZeroClicked(){
  if(numberButtonValue == initialValue){
    return true;
  }else{
    return false;
  }
}
