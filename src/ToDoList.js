import React from "react";
import { useStateValue } from "./StateProvider";

function ToDoList() {
  const [{ todolist }, dispatch] = useStateValue();
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
  return (
    <div className="todolist">
      <h4 className="todolist_title">Tasks</h4>
      <button>Hide completed</button>
      {todolist.map((item, id) => (
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
