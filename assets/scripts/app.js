const defaultnum=0 ;
let currentResult = defaultnum;
let logentries =[];
function getUserInput(){
  return  parseInt(userInput.value);
}
// calculate the reult and write on user log
function writeoutput(operator,resultbefore,resultafter){
  const calcDescription= `${resultbefore}${operator}${resultafter}`
  outputResult(currentResult, calcDescription);
  return (calcDescription)
}
function writelog(
  operation,
  previousResult,
  opernum
){
  const logentr ={
    operation:operation,
    previousresult:previousResult,
    num:opernum
   }
   logentries.push(logentr);
   console.log(logentries);
}
function add() {
  const Input=getUserInput();
 const inireuslt=currentResult;
 currentResult += Input;
 writeoutput('+',inireuslt,Input);
 writelog("Add",inireuslt,Input);

 
}
function subtract(){
  const Input=getUserInput();
  const inireuslt=currentResult;
  currentResult -= Input;
  writeoutput('-',inireuslt,Input);
  writelog("SUBTRACT",inireuslt,Input);
}
function multlipy(){
  const Input=getUserInput();
  const inireuslt=currentResult;  
  currentResult *=  Input;
  writeoutput('*',inireuslt,Input);
  writelog("MULTLIPY",inireuslt,Input);
}
function divide(){
  const Input=getUserInput();
  const inireuslt=currentResult;
  currentResult /= Input;
  writeoutput('/',inireuslt,Input);
  writelog("DIVIDE",inireuslt,Input);
}
addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click",subtract);
multiplyBtn.addEventListener("click",multlipy);
divideBtn.addEventListener("click",divide);
