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
      <div style={{ margin: "20px" }}>
        <h2>To-Do List</h2>
        <div>
          <input
            placeholder="Enter Todo"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={handleClick}>ADD TODO</button>
        </div>
        <ul className="tasks-list">
          {tasks.map((task) => {
            return (
              <li className="task">
                <div>
                  <span>{task}</span>
                </div>
                <div>
                  <button onClick={() => handleDelete(task)}>Delete</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
export default Todo;
