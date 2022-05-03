export const initialState = {
  todolist: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        todolist: [...state.todolist, action.item],
      };

    case "DELETE_TASK":
      const index = state.todolist.findIndex((todo) => todo.id === action.id);
      let newtodolist = [...state.todolist];
      if (index >= 0) {
        newtodolist.splice(index, 1);
      }
      return {
        ...state,
        todolist: newtodolist,
      };

    default:
      return state;
  }
};

export default reducer;
