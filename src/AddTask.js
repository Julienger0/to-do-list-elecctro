import React from "react";

function AddTask() {
  return (
    <div className="addTask">
      <form className="addTask_form">
        <input
          type="text"
          className="addTask_text"
          placeholder="Write a new task here"
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
