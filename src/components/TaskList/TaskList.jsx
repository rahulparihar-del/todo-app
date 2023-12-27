import React, { useState } from "react";
import TaskCard from "../TaskCard/TaskCard";
import "./TaskList.css";

//Array State Value 1 Done : Set arrays
//conditional Templates 2 : Used && and ?: Operator
export default function TaskList({ tasks, setTasks }) {
  

  const [show, setShow] = useState(true);


  const handleDelete = (id) => {
    //we need to pass id to remove indiviual task and we will use filter method to remove task
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <section className="tasklist">
      <ul>
        <div className="header">
          <h1>Task List</h1>
          {/* we add dynamic expression */}
          <button onClick={() => setShow(!show)} className="trigger">
            {show ? "Hide" : "Show"}
          </button>
        </div>
        {show &&
          tasks.map((task, index) => (
            <TaskCard
              key={task.id}
              task={task}
              handleDelete={handleDelete}
            />
          ))}
      </ul>
    </section>
  );
}
