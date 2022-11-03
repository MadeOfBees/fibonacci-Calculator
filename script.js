if (!process.argv[2]) {var div=0};
const dig = process.argv[2]
if (dig>0) {calcFibServer()}else{
  const generateBtn = document.getElementById('generate');
  generateBtn.addEventListener("click", calcFib);}
function calcFibServer(){
  const fibby = [];
  const fibonacci = (position) => {
    if (position < 2) {
      return position;}
    return fibonacci(position - 1) + fibonacci(position - 2);};
  const fibonacciUpTo = (value) => {
    if (value > 0) {
      fibby.push(fibonacci(value));
      return fibonacciUpTo(value - 1);
    } else {
      const reversed = fibby.reverse();
      console.log(`[${reversed}]`)
      return value;}};
  fibonacciUpTo(dig);}
function calcFib(){
  const diggy = prompt("How many digits do you want to calculate to?");
  const fibby = [];
  const fibonacci = (position) => {
    if (position < 2) {
      return position;}
    return fibonacci(position - 1) + fibonacci(position - 2);};
  const fibonacciUpTo = (value) => {
    if (value > 0) {
      fibby.push(fibonacci(value));
      return fibonacciUpTo(value - 1);
    } else {
      const reversed = fibby.reverse();
      const printText = document.querySelector("#screenText");
      printText.value = `[${reversed}]`;
      generateBtn.setAttribute("style", "background-color: rgb(92, 212, 76);", );
      document.getElementById("generate").innerHTML = "Generate another array";
      return value;}};
  fibonacciUpTo(diggy);}
