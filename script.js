const generateBtn = document.getElementById('generate');
generateBtn.addEventListener("click", calcFib);
function calcFib(){
  const dig = prompt("How many digits do you want to calculate to?");
  const fibby = [];
  const fibonacci = (position) => {
    if (position < 2) {
      return position;}
      var sqRootOf5 = Math.sqrt(5);
      var var1 = (1+sqRootOf5)/2;
      var var2 = (1-sqRootOf5)/2
      return Math.round((Math.pow(var1, position) - Math.pow(var2, position)) / sqRootOf5);};
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
  fibonacciUpTo(dig);
}
