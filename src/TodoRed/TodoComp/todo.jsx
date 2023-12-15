import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { handleAddTodo, handleRemoveTodo } from '../TodoSliceComp/TodoSlice';
import { v4 as uuidv4 } from "uuid"

function CalcApp() {
    const todos = useSelector((state) => state.todo ? state.todo.value : [])
    const dispatch = useDispatch()
    const [input, setInput] = useState("")

    return (
        <div>
            <input value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={() => {
                dispatch(handleAddTodo({ value: input, id: uuidv4() }));
                setInput("");
            }}>add</button>
            <ul>
                {todos.map((x, i) => (
                    <li key={x.id}>
                        {x.value}
                        <button onClick={() => dispatch(handleRemoveTodo(x.id))}>remove</button>
                    </li>
                ))}
            </ul >
        </div >
    );
}

export default CalcApp;
