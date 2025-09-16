import React, { useState, useEffect } from "react";
import './App.css';

function Count() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Change the total page background
    document.body.style.backgroundColor = count > 5 ? "black" : "white";
    document.body.style.color = count > 5 ? "white" : "black";
  }, [count]);

  return (
    <div className="App">
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Count;
