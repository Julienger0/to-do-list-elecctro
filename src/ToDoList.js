import React, { useState } from "react";
import { useStateValue } from "./StateProvider";

function ToDoList() {
  const [checked, setChecked] = useState(false);

  const [{ todolist, filteredtodolist }, dispatch] = useStateValue();
  const [sort, setSort] = useState(0);

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

  const OrderToDoList = () => {
    if (sort === 0) {
      todolist.sort((a, b) => a.name.localeCompare(b.name));
      filteredtodolist.sort((a, b) => a.name.localeCompare(b.name));

      setSort(1);
    } else if (sort === 1) {
      todolist.sort((a, b) => b.name.localeCompare(a.name));
      filteredtodolist.sort((a, b) => b.name.localeCompare(a.name));

      setSort(2);
    } else if (sort === 2) {
      todolist.sort((a, b) => a.dateAdded.localeCompare(b.dateAdded));
      filteredtodolist.sort((a, b) => a.dateAdded.localeCompare(b.dateAdded));

      setSort(0);
    }
  };

  const EditTask = (id) => {
    dispatch({
      type: "EDIT",
      id: id,
    });
  };

  return (
    <div className="todolist">
      <button onClick={() => OrderToDoList()}>Tasks</button>
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
              <button onClick={() => EditTask(item.id)}>Edit</button>
              <button onClick={() => DeleteTask(item.id)}>Delete</button>
            </div>
          ))
        : todolist.map((item, id) => (
            <div className="todolist_todo" key={id}>
              <button onClick={() => CompleteTask(item.id, item.completed)}>
                Complete
              </button>
              <p>{item.name}</p>
              <button onClick={() => EditTask(item.id)}>Edit</button>
              <button onClick={() => DeleteTask(item.id)}>Delete</button>
            </div>
          ))}
    </div>
  );
}

export default ToDoList;
