export const initialState = {
  todolist: [],
  filteredtodolist: [],
  edit: false,
  editID: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        todolist: [...state.todolist, action.item],
        filteredtodolist: [...state.filteredtodolist, action.item],
      };

    case "DELETE_TASK":
      let index = state.todolist.findIndex((todo) => todo.id === action.id);
      let newtodolist = [...state.todolist];
      if (index >= 0) {
        newtodolist.splice(index, 1);
      }
      return {
        ...state,
        todolist: newtodolist,
        filteredtodolist: newtodolist.filter(
          (todo) => todo.completed === false
        ),
      };

    case "COMPLETE_TASK":
      let index2 = state.todolist.findIndex((todo) => todo.id === action.id);
      state.todolist[index2].completed = !action.completed;
      return {
        ...state,
        filteredtodolist: state.todolist.filter(
          (todo) => todo.completed === false
        ),
      };

    case "EDIT":
      return {
        ...state,
        edit: true,
        editID: state.todolist.findIndex((todo) => todo.id === action.id),
      };

    case "EDIT_TASK":
      state.todolist[action.id].name = action.name;

      return {
        ...state,
        edit: false,
        editID: action.id,
      };

    default:
      return state;
  }
};

export default reducer;
