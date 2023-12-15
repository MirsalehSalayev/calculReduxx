import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { calculate } from '../calcSliceComp/calcSlice';

function CalcApp() {
    const result = useSelector((state) => state.calc ? state.calc.value : 0)
    const dispatch = useDispatch()
    const [input, setInput] = useState("")

    const handleCalculate = () => {
        dispatch(calculate(input));
        setInput("");
    }

    return (
        <div>
            <input value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={handleCalculate}>Calculate</button>
            <h2>Result: {result}</h2>
        </div >
    );
}

export default CalcApp;
