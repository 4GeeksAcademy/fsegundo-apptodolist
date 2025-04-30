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

            <div className="tareas" style={{ fontFamily: 'initial' }}>
                <h1> <strong>TAREAS DE SEGUNDO</strong> </h1>
                <input
                    type="text" style={{ width: '350px', height: '40px', backgroundColor: 'white', borderRadius: '5px', marginBottom: '10px' }}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                {
                    tasks.map((task, index) => (
                        <ul key={index} className="task-item" style={{ width: '350px', height: '40px'}}>
                            {task}
                            <button onClick={() => deletetask(index)} type="button" class="delete-btn btn btn-outline-danger">x</button>
                        </ul>
                    )

                    )
                }

            </div>
        </>
    )
}