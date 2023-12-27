import React from "react";
import "./TaskCard.css";

//Prop
export default function TaskCard({task, handleDelete, Info}) {
  return (
    <div className="taskcard">
      <li  className={task.completed ? "completed" : "incomplete"}>
      <span>
        {task.id} - {task.name} 
      </span>
      <button onClick={() => handleDelete(task.id)} className="delete">
        Delete
      </button>
    </li>
    </div>
  
  );
}
