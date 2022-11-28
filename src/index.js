import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

function App() {
  function generateButton() {
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
        } 
      }
    };
    fibonacciUpTo(digit);
  }
  return (
      <div className="wrapper">
        <div className="card">
          <div className="card-header">
            <h2>Fibonacci Calculator: MadeOfBees</h2>
          </div>
          <div className="card-body">
            
          <textarea id="screenText" rows="10" cols="50" placeholder="Your Fibonacci sequence will appear here"></textarea>
          </div>
          <div className="card-footer">
            <button onClick={generateButton} id="generate" className="btn">Click to begin calculating</button>
          </div>
        </div>
      </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
