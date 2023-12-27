import React, { useRef, useState } from 'react';
import "./AddTask.css";

function AddTask({ tasks, setTasks }) {
    // const [taskValue, setTaskValue] = useState("");
    const taskRef = useRef() // have uses useref for not need for rendering 
    const [progress, setProgress] = useState(false);

    // const handleChange = (event) => {
    //    console.log(taskRef.current.value);
    // };

    const handleReset = () => {
      taskRef.current.value = "";
        setProgress(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Input validation
        if (!taskRef.current.value.trim()) {
            // If taskValue is empty or contains only spaces
            alert("Value cannot be empty : Please Enter Something");
            return;
        }

        const task = {
            id: Math.floor(Math.random() * 10000),
            name: taskRef.current.value,
            completed: Boolean(progress)
        };

        setTasks([...tasks, task]);
        handleReset();
    };

    return (
        <section className="addtask">
            <form onSubmit={handleSubmit}>
                <input
                    // onChange={handleChange}
                    type="text"
                    name="task"
                    id="task"
                    placeholder="Task Name"
                    autoComplete="off"
                    ref={taskRef}
                />
                <select onChange={(event) => setProgress(event.target.value)} value={progress}>
                    <option value="false">Pending</option>
                    <option value="true">Completed</option>
                </select>
                <button type="submit">Add Task</button>
                <span onClick={handleReset} className="reset">
                    Reset Task
                </span>
            </form>
        </section>
    );
}

export default AddTask;
