import React, { useEffect, useState } from "react";
import { useStateValue } from "./StateProvider";
import { v4 as uuidv4 } from "uuid";

function AddTask() {
  const [{ todolist, edit, editID }, dispatch] = useStateValue();
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (edit === false) {
      dispatch({
        type: "ADD_TASK",
        item: {
          name: name,
          id: uuidv4(),
          completed: false,
          dateAdded: Date(),
        },
      });
    } else {
      dispatch({
        type: "EDIT_TASK",
        name: name,
        id: editID,
      });
    }
    setName("");
  };

  return (
    <div className="addTask">
      <form className="addTask_form" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          className="addTask_text"
          placeholder="Write a new task here"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button type="submit" className="addTask_submit">
          {edit ? "Edit" : "Create"}
        </button>
      </form>
    </div>
  );
}

export default AddTask;
