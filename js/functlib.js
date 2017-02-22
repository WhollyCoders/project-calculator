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

function startOperation(e){
  console.log('Operation started...');
  currentOperation = e.target.name;
  console.log(currentOperation);
  storeFirstVariable();

}

function getCurrentOperation(){
  return currentOperation;
}

function setFirstVariable(){
  currentOutputValue = getCurrentOutputValue();
  firstVariable = currentOutputValue;
  return firstVariable;
}

function setSecondVariable(){
  currentOutputValue = getCurrentOutputValue();
  secondVariable = currentOutputValue;
  return secondVariable;
}

function storeFirstVariable(){
  firstVariable = setFirstVariable();
  numbers[0] = firstVariable;
  resetDisplay();
}

function completeOperation(){
  console.log('Completing operation...');
  secondVariable = setSecondVariable();
  numbers[1] = secondVariable;
  currentOutputValue = evaluateExpression();
  displayResult(currentOutputValue);
}

function evaluateExpression(){
  currentOperation = getCurrentOperation();
  switch(currentOperation){
    case "add":
        currentOutputValue = numbers[0] + numbers[1];
        return currentOutputValue;
        break;
    case "subtract":
        currentOutputValue = numbers[0] - numbers[1];
        return currentOutputValue;
        break;
    case "multiply":
        currentOutputValue = numbers[0] * numbers[1];
        return currentOutputValue;
        break;
    case "divide":
        currentOutputValue = numbers[0] / numbers[1];
        return currentOutputValue;
        break;
    default:
        console.log('There has been an error...');

  }
}

function checkMaximumCharacters(){
  currentOutputValue = getCurrentOutputValue();
  console.log(currentOutputValue.length);
  if(currentOutputValue.length > maxCharacters){
    return true;
  }
  return false;
}

function displayResult(outputValue){
  maxReached = checkMaximumCharacters();
  if(maxReached){
    outputArea.innerHTML = outputValue;
  }
  outputArea.innerHTML = outputValue.toExponential();
}

function resetDisplay(){
  outputArea.innerHTML = initialValue;
}
