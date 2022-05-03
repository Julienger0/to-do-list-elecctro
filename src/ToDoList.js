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
  return (
    <div className="todolist">
      <h4 className="todolist_title">Tasks</h4>
      <button>Hide completed</button>
      {todolist.map((item, id) => (
        <div className="todolist_todo" key={id}>
          <button>Complete</button>
          <p>{item.name}</p>
          <button>Edit</button>
          <button onClick={() => DeleteTask(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default ToDoList;
