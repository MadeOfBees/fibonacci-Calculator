document.getElementById('generate').addEventListener("click", function () {
  const dig = prompt("How many digits do you want to calculate to?");
  const fibby = [];
  const fibonacci = (position) => {
    if (position < 2) return position;
    return Math.round((Math.pow((1 + Math.sqrt(5)) / 2, position) - Math.pow((1 - Math.sqrt(5)) / 2, position)) / Math.sqrt(5));};
  const fibonacciUpTo = (value) => {
    if (value > 70 || value < -1) {
      alert(`Number can only be between 1 and 70`)
      return
    }else{
      if (value > 0) {
        fibby.push(fibonacci(value));
        return fibonacciUpTo(value - 1);
      }else{
        document.querySelector("#screenText").value = `[` + fibby.reverse() + `]`;
        document.getElementById('generate').setAttribute("style", "background-color: rgb(92, 212, 76);",).innerHTML = "Generate another array";
        return value;};};};
  fibonacciUpTo(dig);});