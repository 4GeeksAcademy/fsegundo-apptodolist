import { useState } from "react";
import React from "react";


export const Todolist = () => {
    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState('');


    const deletetask = (taskIndex) => {
        const newTasks = tasks.filter((_, index) => index !== taskIndex)
        setTasks(newTasks);
    };



    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && inputValue.trim() !== '') {
            setTasks([...tasks, inputValue]);
            setInputValue('');
        }
    };
    return (
        <>
           
            <div className="tareas">
            <h1> <strong>TAREAS DE SEGUNDO</strong> </h1>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                {
                    tasks.map((task, index) => (
                        <li key={index} className="task-item">
                            {task}
                            <button onClick={() => deletetask(index)}>X</button>
                        </li>
                    )

                    )
                }

            </div>
        </>
    )
}