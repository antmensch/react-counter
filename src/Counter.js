import React from "react";

export default function Counter() {
    const [count, setCount] = React.useState(0);

    function plusCount() {
        setCount(prevState => prevState + 1);
    }

    function minusCount() {
        setCount(prevState => prevState - 1);
    }

    function resetCount() {
        setCount(0);
    }

    return (
    <main className="count--container">
        <button className="count--button" onMouseUp={plusCount}>+</button>    
        <div className="count--counter">{count}</div>
        <button className="count--button" onMouseUp={minusCount}>-</button>
        <button className="count--button count--reset" onMouseUp={resetCount}>reset</button>
    </main>);
} 

