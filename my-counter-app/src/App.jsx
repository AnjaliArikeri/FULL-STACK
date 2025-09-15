import React, { useState } from "react";

function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleCalculate = () => {
    try {
      // eslint-disable-next-line no-eval
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <div
      style={{
        width: "250px",
        margin: "50px auto",
        padding: "20px",
        borderRadius: "15px",
        backgroundColor: "#222",
        color: "white",
        textAlign: "center",
        boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
      }}
    >
      <h2>Calculator</h2>
      <input
        type="text"
        value={input}
        readOnly
        style={{
          width: "100%",
          height: "40px",
          marginBottom: "15px",
          fontSize: "18px",
          textAlign: "right",
          padding: "5px",
          borderRadius: "8px",
          border: "none",
        }}
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "10px",
        }}
      >
        {/* Row 1 */}
        <button onClick={handleClear} style={btnStyle}>
          C
        </button>
        <button onClick={() => handleClick("/")} style={btnStyle}>
          ÷
        </button>
        <button onClick={() => handleClick("*")} style={btnStyle}>
          ×
        </button>
        <button onClick={() => handleClick("-")} style={btnStyle}>
          −
        </button>

        {/* Row 2 */}
        <button onClick={() => handleClick("7")} style={btnStyle}>
          7
        </button>
        <button onClick={() => handleClick("8")} style={btnStyle}>
          8
        </button>
        <button onClick={() => handleClick("9")} style={btnStyle}>
          9
        </button>
        <button onClick={() => handleClick("+")} style={btnStyle}>
          +
        </button>

        {/* Row 3 */}
        <button onClick={() => handleClick("4")} style={btnStyle}>
          4
        </button>
        <button onClick={() => handleClick("5")} style={btnStyle}>
          5
        </button>
        <button onClick={() => handleClick("6")} style={btnStyle}>
          6
        </button>
        <button onClick={handleCalculate} style={{ ...btnStyle, gridRow: "span 2", backgroundColor: "#ff9500" }}>
          =
        </button>

        {/* Row 4 */}
        <button onClick={() => handleClick("1")} style={btnStyle}>
          1
        </button>
        <button onClick={() => handleClick("2")} style={btnStyle}>
          2
        </button>
        <button onClick={() => handleClick("3")} style={btnStyle}>
          3
        </button>

        {/* Row 5 */}
        <button
          onClick={() => handleClick("0")}
          style={{ ...btnStyle, gridColumn: "span 2" }}
        >
          0
        </button>
        <button onClick={() => handleClick(".")} style={btnStyle}>
          .
        </button>
      </div>
    </div>
  );
}

const btnStyle = {
  padding: "15px",
  fontSize: "18px",
  borderRadius: "8px",
  border: "none",
  backgroundColor: "#333",
  color: "white",
  cursor: "pointer",
};

export default Calculator;
