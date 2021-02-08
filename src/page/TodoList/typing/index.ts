export type Content = string;
export type ID = string;
export interface Todo {
  id: ID;
  content: Content;
  complete: boolean;
}

export type TodoList = Array<Todo>;

export enum Actions {
  ADD_TODO = "ADD_TODO",
  REMOVE_TODO = "REMOVE_TODO",
  TOGGLE_TODO_STATUS = "TOGGLE_TODO_STATUS",
}
export interface IAction {
  type: Actions;
  payload: ID | Todo;
}
