import React, { useState } from "react";
import { useStateValue } from "./StateProvider";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

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
      <div className="todolist_header">
        <button className="todolist_header_btn" onClick={() => OrderToDoList()}>
          Tasks
        </button>
        <label className="todolist_check">
          <input type="checkbox" checked={checked} onChange={handleChange} />
          Hide Completed
        </label>
      </div>
      {checked
        ? filteredtodolist.map((item, id) => (
            <div className="todolist_todo" key={id}>
              <div className="todolist_todo_left">
                <button
                  className="todolist_todo_btn"
                  onClick={() => CompleteTask(item.id, item.completed)}
                >
                  {item.completed ? (
                    <CheckBoxIcon />
                  ) : (
                    <CheckBoxOutlineBlankIcon />
                  )}
                </button>
                <p>{item.name}</p>
              </div>
              <div className="todolist_todo_right">
                <button
                  className="todolist_todo_btn"
                  onClick={() => EditTask(item.id)}
                >
                  <EditIcon />
                </button>
                <button
                  className="todolist_todo_btn"
                  onClick={() => DeleteTask(item.id)}
                >
                  <DeleteIcon />
                </button>
              </div>
            </div>
          ))
        : todolist.map((item, id) => (
            <div className="todolist_todo" key={id}>
              <div className="todolist_todo_left">
                <button
                  className="todolist_todo_btn"
                  onClick={() => CompleteTask(item.id, item.completed)}
                >
                  {item.completed ? (
                    <CheckBoxIcon />
                  ) : (
                    <CheckBoxOutlineBlankIcon />
                  )}
                </button>
                <p>{item.name}</p>
              </div>
              <div className="todolist_todo_right">
                <button
                  className="todolist_todo_btn"
                  onClick={() => EditTask(item.id)}
                >
                  <EditIcon />
                </button>
                <button
                  className="todolist_todo_btn"
                  onClick={() => DeleteTask(item.id)}
                >
                  <DeleteIcon />
                </button>
              </div>
            </div>
          ))}
    </div>
  );
}

export default ToDoList;
