export const setTodoData = (payload) => ({
  type: "SET-TODO-DATA",
  payload,
});
export const addTodoData = (payload) => ({
  type: "ADD-DATA-TO-LIST",
  payload,
});
export const removeDataFromTodo = (payload) => ({
  type: "REMOVE-DATA-FROM-LIST",
  payload,
});
