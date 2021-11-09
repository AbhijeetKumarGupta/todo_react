const initialState = {
  todoData: [],
};

const setState = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET-TODO-DATA":
      return { ...state, todoData: payload };
    case "REMOVE-DATA-FROM-LIST":
      var filteredData = [];
      for (var i = 0; i < state.todoData.length; i++) {
        if (parseInt(state.todoData[i].id) !== parseInt(payload)) {
          filteredData.push(state.todoData[i]);
        }
      }
      console.log(filteredData[0].id, payload);
      return { ...state, todoData: filteredData };
    case "ADD-DATA-TO-LIST":
      var newDataList = state.todoData;
      newDataList.push(payload);
      console.log(newDataList);
      return { ...state, todoData: newDataList };

    default:
      return state;
  }
};

export default setState;
