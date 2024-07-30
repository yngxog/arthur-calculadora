import React, { useState } from "react";

function Calculadora() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [result, setResult] = useState("");
    
    return <>
        <h1>Calculadora React</h1>
        <input 
        type="number"
        value={num1}
        onChange={(event) => setNum1(parseFloat(event.target.value))}
        ></input>
        <input 
        type="number"
        value={num2}
        onChange={(event) => setNum2(parseFloat(event.target.value))}
        ></input>
        <button onClick={() => setResult(num1 + num2)}>+</button>
        <button onClick={() => setResult(num1 - num2)}>- </button>
        <button onClick={() => setResult(num1 * num2)}>*</button>
        <button onClick={() => setResult(num1 / num2)}>/</button>
        <p>{result}</p>
    </>
}

export default Calculadora;s