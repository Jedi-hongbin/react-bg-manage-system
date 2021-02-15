import { TodoList, IAction, Actions, Todo, ID } from "./typing/index";

export const reducer = (state: TodoList, action: IAction): TodoList => {
  const { type, payload } = action;

  switch (type) {
    case Actions.ADD_TODO:
      return [...state, payload as Todo];
    case Actions.REMOVE_TODO:
      return state.filter((todo: Todo) => todo.id !== (payload as ID));
    case Actions.TOGGLE_TODO_STATUS:
      return state.map((todo: Todo) => {
        if (todo.id === payload) {
          todo.complete = !todo.complete;
        }
        return todo;
      });
    default:
      return state;
  }
};
