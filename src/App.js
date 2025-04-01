import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const clearInput = () => {
    setInput("");
  };

  const calculateResult = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="App">
      <div className="calculator">
        <input type="text" value={input} readOnly />
        <div className="buttons">
          {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"].map((btn) => (
            <button
              key={btn}
              onClick={() => (btn === "=" ? calculateResult() : handleClick(btn))}
            >
              {btn}
            </button>
          ))}
          <button onClick={clearInput}>C</button>
        </div>
      </div>
    </div>
  );
}

export default App;
