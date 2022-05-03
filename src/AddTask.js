import React, { useState } from "react";
import { useStateValue } from "./StateProvider";

function AddTask() {
  const [{ todolist }, dispatch] = useStateValue();
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_TASK",
      item: {
        name: name,
        id: 2,
        completed: false,
      },
    });
    setName("");
    console.log({ todolist });
  };

  return (
    <div className="addTask">
      <form className="addTask_form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="addTask_text"
          placeholder="Write a new task here"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button type="submit" className="addTask_submit">
          Create
        </button>
      </form>
    </div>
  );
}

export default AddTask;
