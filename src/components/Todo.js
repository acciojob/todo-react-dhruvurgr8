import React, { useState } from "react";
import "./Todo.css";
function Todo() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTask] = useState([]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleClick = () => {
    setTask((preTask) => {
      return [...preTask, inputValue];
    });
  };

  const handleDelete = (taskToDelete) => {
    const newTasks = tasks.filter((task) => {
      return task !== taskToDelete;
    });
    setTask([...newTasks]);
  };
  return (
    <>
      <h1>To-Do List</h1>
      <input value={inputValue} onChange={handleChange} type="text" />
      <button onClick={handleClick}>ADD TODO</button>
      <div className="task-list">
        {tasks.map((task, index) => (
          <div className="list">
            <ul key={index}>
              <li>
                <h2>{task}</h2>
              </li>
              <li>
                <button
                  onClick={() => {
                    handleDelete(task);
                  }}
                >
                  Delete
                </button>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}
export default Todo;
