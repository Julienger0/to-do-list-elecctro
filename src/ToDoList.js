import React, { useState } from "react";
import { useStateValue } from "./StateProvider";

function ToDoList() {
  const [checked, setChecked] = useState(false);

  const [{ todolist, filteredtodolist }, dispatch] = useStateValue();

  const DeleteTask = (id) => {
    dispatch({
      type: "DELETE_TASK",
      id: id,
    });
  };

  const CompleteTask = (id, completed) => {
    dispatch({
      type: "COMPLETE_TASK",
      id: id,
      completed: completed,
    });
  };

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div className="todolist">
      <h4 className="todolist_title">Tasks</h4>
      <label>
        <input type="checkbox" checked={checked} onChange={handleChange} />
        Hide Completed
      </label>
      {checked
        ? filteredtodolist.map((item, id) => (
            <div className="todolist_todo" key={id}>
              <button onClick={() => CompleteTask(item.id, item.completed)}>
                Complete
              </button>
              <p>{item.name}</p>
              <button>Edit</button>
              <button onClick={() => DeleteTask(item.id)}>Delete</button>
            </div>
          ))
        : todolist.map((item, id) => (
            <div className="todolist_todo" key={id}>
              <button onClick={() => CompleteTask(item.id, item.completed)}>
                Complete
              </button>
              <p>{item.name}</p>
              <button>Edit</button>
              <button onClick={() => DeleteTask(item.id)}>Delete</button>
            </div>
          ))}
    </div>
  );
}

export default ToDoList;
