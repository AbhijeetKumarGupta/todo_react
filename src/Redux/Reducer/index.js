const initialState = {
  todoData: [],
};

const setState = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET-TODO-DATA":
      return { ...state, todoData: payload };
    case "REMOVE-DATA-FROM-LIST":
      return {
        ...state,
        todoData: state.todoData.filter(
          (item) => parseInt(item.id) !== parseInt(payload)
        ),
      };
    case "ADD-DATA-TO-LIST":
      return state.todoData.length > 0
        ? { ...state, todoData: [payload, ...state.todoData] }
        : { ...state, todoData: [payload] };

    default:
      return state;
  }
};

export default setState;
