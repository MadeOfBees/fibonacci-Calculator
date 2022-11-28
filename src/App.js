function App() {
  function onButt() {
    const digit = prompt("How many digits do you want to calculate to?");
    const fibby = [];
    const fibonacci = (position) => {
      if (position < 2) return position;
      return Math.round((Math.pow((1 + Math.sqrt(5)) / 2, position) - Math.pow((1 - Math.sqrt(5)) / 2, position)) / Math.sqrt(5));
    };
    const fibonacciUpTo = (value) => {
      if (value > 70 || value < -1 || !Number.isInteger(parseInt(value))) {
        alert(`Value can only be a real whole number between 1 and 70`)
        return
      } else {
        if (value > 0) {
          fibby.push(fibonacci(value));
          return fibonacciUpTo(value - 1);
        } else {
          document.querySelector("#screenText").value = `[` + fibby.reverse() + `]`;
          document.getElementById('generate').setAttribute("style", "background-color: rgb(92, 212, 76);",);
          return value;
        };
      };
    };
    fibonacciUpTo(digit)
  };
  return (
    <body>
      <div class="wrapper">
        <div class="card">
          <div class="card-header">
            <h2>Fibonacci Calculator: MadeOfBees</h2>
          </div>
          <div class="card-body">
            <textarea
              readonly
              id="screenText"
              placeholder="Finished array will go here"
              aria-label="Finished array will go here"
            ></textarea>
          </div>
          <div class="card-footer">
            <button onClick={onButt} id="generate" class="btn">Click to begin calculating</button>
          </div>
        </div>
      </div>
    </body>
  );
}

export default App;
