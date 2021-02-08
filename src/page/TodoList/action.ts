import { Dispatch } from "react";
import { Actions, Todo, ID } from "./typing";
// add
export interface IAddTodoAction {
  type: Actions;
  payload: Todo;
}

const addTodoAction = (todo: Todo): IAddTodoAction => ({
  type: Actions.ADD_TODO,
  payload: todo,
});

export const addTodo = (todo: Todo) => (dispatch: Dispatch<IAddTodoAction>) => {
  dispatch(addTodoAction(todo));
};
// remove
export interface IRemoveTodoAction {
  type: Actions;
  payload: ID;
}

const removeTodoAction = (ID: ID): IRemoveTodoAction => ({
  type: Actions.REMOVE_TODO,
  payload: ID,
});

export const removeTodo = (ID: ID) => (
  dispatch: Dispatch<IRemoveTodoAction>
) => {
  dispatch(removeTodoAction(ID));
};
// toggle
export interface IToggleTodoStatusAction {
  type: Actions;
  payload: ID;
}

const toggleTodoStatusAction = (ID: ID): IToggleTodoStatusAction => ({
  type: Actions.TOGGLE_TODO_STATUS,
  payload: ID,
});

export const toggleTodoStatus = (ID: ID) => (
  dispatch: Dispatch<IToggleTodoStatusAction>
) => {
  dispatch(toggleTodoStatusAction(ID));
};
