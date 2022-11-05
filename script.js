const generateBtn = document.getElementById('generate');
generateBtn.addEventListener("click", calcFib);
function calcFib() {
  const dig = prompt("How many digits do you want to calculate to?");
  const fibby = [];
  const fibonacci = (position) => {
    if (position < 2) {
      return position;
    };
    const sqRootOf5 = Math.sqrt(5);
    let v1 = (1 + sqRootOf5) / 2;
    let v2 = (1 - sqRootOf5) / 2;
    return BigInt(Math.round((Math.pow(v1, position) - Math.pow(v2, position)) / sqRootOf5));
  };
  const fibonacciUpTo = (value) => {
    if (value > 0) {
      fibby.push(fibonacci(value));
      return fibonacciUpTo(value - 1);
    } else {
      const reversed = fibby.reverse();
      const printText = document.querySelector("#screenText");
      printText.value = `[${reversed}]`;
      generateBtn.setAttribute("style", "background-color: rgb(92, 212, 76);",);
      document.getElementById("generate").innerHTML = "Generate another array";
      return value;
    }
  };
  fibonacciUpTo(dig);
}